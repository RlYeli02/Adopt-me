import {useState} from 'react'
import {Link} from '@reach/router'
/** @jsx jsx */;
import {css, jsx, keyframes} from '@emotion/core'
import colors from './colors'

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;


const NavBar = () => {
    const [padding ] = useState(15)

    return (
        <header 
        css={css`
        background-color: ${colors.secondary};
        position: sticky;
        padding: ${padding}px;
        
        `}>
            <Link to="/">Adopt Me!</Link>
            <span css= {css `
             font-size:60px; 
             display:inline-block; 
             animation: 1s ${Spin} linear infinite;
             &:hover{
                text-decoration: underline;
                animation: 3s ${Spin} linear infinite reverse;
                }
            `} role="img" aria-label="logo">😅</span>
        </header>
     
    )

}


export default NavBar;