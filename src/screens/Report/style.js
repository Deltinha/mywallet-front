import styled from "styled-components";

export const ReportStyled = styled.div`
`;

export const Header = styled.div`
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 22px;
    span {
        font-size: 26px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    svg {
        font-size: 25px;
        min-width: 25px;
    }
`;

export const Entries = styled.div`
    height: 446px;
    background-color: white;
    width: calc(100vw - 50px);
    max-width: 326px;
    border-radius: 5px;
`;