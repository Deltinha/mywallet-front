import styled from 'styled-components';

export const AddEntryStyled = styled.div`
  span {
    width: 100%;
    font-size: 26px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 40px;
  }
`;
