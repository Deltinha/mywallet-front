import styled from "styled-components";

export const ReportStyled = styled.div`
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 22px;
    span {
        color: white;
        font-size: 26px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > button {
        border: none;
        background-color: rgba(0,0,0,0);
        color: white;
    }

    svg {
        font-size: 25px;
        min-width: 25px;
        cursor: pointer;
    }
`;

export const Entries = styled.div`
    box-sizing: border-box;
    padding: 23px 12px 0 12px;
    height: 446px;
    background-color: white;
    width: 100%;
    border-radius: 5px 5px 0 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
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
    color: ${({children:value})=> parseFloat(value.replace(',','.')) > 0 ? '#03AC00' : '#c70000'};
`;

export const Date = styled.span`
    color: #C6C6C6;
`;

export const Description = styled.span`
    display: inline-block;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Balance = styled.div`
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 700;
    height: 45px;
    padding: 0px 12px 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
    color: white;
    background-color: #A328D6;
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