import styled from "styled-components";

export const ReportStyled = styled.div``;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 22px;
  span {
    color: var(--text);
    font-size: 26px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: var(--text);
  }

  svg {
    font-size: 25px;
    min-width: 25px;
    cursor: pointer;
  }
`;

export const Entries = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 23px 12px 0 12px;
  height: 446px;
  background-color: var(--overlay);
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: scroll;
  font-weight: 700;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  > span {
    color: var(--text);
    font-size: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 180px;
  }
`;

export const Item = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-width: 100%;
  line-height: 19px;

  > div {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    max-width: calc(100% - 105px);
  }
`;

export const Value = styled.span`
  font-weight: 700;
  color: ${({ children: value }) =>
    parseFloat(value.replace(",", ".")) >= 0 ? "var(--foam)" : "var(--love)"};
`;

export const Date = styled.span`
  color: var(--text);
`;

export const Description = styled.span`
  display: inline-block;
  color: var(--rose);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Balance = styled.div`
  color: var(--text);
  box-sizing: border-box;
  font-size: 17px;
  font-weight: 700;
  height: 45px;
  padding: 0px 12px 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--overlay);
  width: 100%;
  border-radius: 0 0 5px 5px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 13px;
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const Button = styled.button`
  font-size: 17px;
  color: var(--base);
  background-color: var(--rose);
  height: 114px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > svg {
    font-size: 22px;
  }

  > span {
    width: min-content;
    font-size: 17px;
    font-weight: 700;
    text-align: start;
  }
`;
