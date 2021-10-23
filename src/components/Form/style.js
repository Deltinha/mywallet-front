import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    gap: 13px;
`;

export const SubmitButton = styled.input`
    width: 100%;
    height: 46px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: ${({disabled})=>disabled ? 'wait' : 'pointer'};
`;

export const TextInput = styled.input`
    width: 100%;
    height: 58px;
    border: ${({redBorder})=> (redBorder ? '3px #ff4000 solid': 'none')};
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 17px 15px 17px 15px;

    :focus {
        outline: 3px solid #360000;
    }

    ::placeholder {
        color: black;
        opacity: 1;
    }
    
`;

export const InputLabel = styled.label`
    color: pink;
    font-size: 15;
    font-weight: 700;
    margin-bottom: 13px;
`;