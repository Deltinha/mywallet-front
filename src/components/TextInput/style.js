import styled from "styled-components";

export const TextInput = styled.input`
    width: 326px;
    height: 58px;
    border: ${({redBorder})=> (redBorder ? '3px red solid': 'none')};
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