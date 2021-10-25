import Modal from "styled-react-modal";

export const ModalStyled = Modal.styled`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: white;
    background-color: #8C11BE;
    width: calc(100vw - 100px);
    max-width: 281px;
    height: 200px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    > span {
        text-align: center;
    }

    > button {
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        width: 110px;
        height: 28px;
        font-size: 17px;
        color: white;
        font-weight: 700;
        cursor: pointer;
    }
    
`;