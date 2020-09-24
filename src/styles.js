import styled from 'styled-components';

export const Body = styled.body`
    width: 100vw;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: linear-gradient(to bottom, #ff8000, #ff8f00, #ff9d00, #ffab00, #ffb900);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 600%;
    font-weight: bold;
    color: #ffff;
    padding: 35px;
`;
export const Div = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: solid #ffff 1px;
    padding-bottom: 50px;
`;

export const Input = styled.input`
    font-size: 18px;
    padding: 15px;
    width: 75%;
    height: 40px;
    border: 1px solid grey;
    border-right: none;
    ::placeholder {
        color: grey;
        opacity: 0.7;
    }
`;

export const Button = styled.button`
    color:grey;
    font-size: 18px;
    width: 10%;
    height: 40px;
    background: #ffff;
    border: 1px solid grey;
    border-left: none;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
`; 

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`; 