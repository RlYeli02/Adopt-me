import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false,
      toggleModal: () => this.setState({ showModal: !this.state.showModal }), // si es true hazlo false, si es false hazlo true. esto es para hacer lo contrario de lo actualmente es.
      adopt: () => navigate(this.state.url),
    };
  }

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />

        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                onClick={this.state.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.state.adopt}>Yes</button>
                  <button onClick={this.state.toggleModal}>
                    No, I dont have time
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
          {/* esto es para decirle a react que renderice null, para que no renderice nada */}
        </div>
      </div>
    );
  }
}

// la funcion normal vs flecha:
// la funcion normal puede ser diferente cada vez que se invoca la funcion
// la funcion flecha se mantiene el valor del this del contexto lexico que envuelve la funcion

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
