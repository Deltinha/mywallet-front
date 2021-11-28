import styled from 'styled-components';

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
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.inactive : theme.rose};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.base};
  font-size: 20px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'wait' : 'pointer')};
`;

export const TextInput = styled.input`
  background-color: ${({ theme }) => theme.overlay};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 58px;
  border: ${({ redBorder, theme }) =>
    redBorder ? `3px ${theme.love} solid` : 'none'};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 20px;
  padding: 17px 15px 17px 15px;

  :focus {
    outline: 3px solid ${({ theme }) => theme.subtle};
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 1;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.love};
  font-size: 15;
  font-weight: 700;
  margin-bottom: 13px;
`;
