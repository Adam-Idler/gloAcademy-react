import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg'

const NavBarStyled = styled.header `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignButton = styled.button`
    display: inline-block;
    background-color: inherit;
    outline: 0;
    border: 0;

    text-transform: uppercase;
    font-size: 16px;
    font-family: Roboto, Arial, sans-serif;
    color: white;
    transition: color .2s;
    :hover {
        color: #ffeb00;
    }
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <SignButton>
            <img src={signImg} alt="logo"/>
            <p>Войти</p>
        </SignButton>
    </NavBarStyled>
);