import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { HasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.HasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }
    if (this.state.HasError) {
      return (
        <h1>
          a error has ocurred trying to load the page.{" "}
          <Link to="/">Click here</Link>to back to the home page
        </h1>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
