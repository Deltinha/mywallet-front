import styled from "styled-components";

export const SubmitButton = styled.input`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: ${({disabled})=>disabled ? 'wait' : 'pointer'};
`;