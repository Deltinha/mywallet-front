import { ReportStyled, Header, Entries } from "./style";
import { IoLogOutOutline } from 'react-icons/io5';

export default function Report(){
    const {
        name,
        userId,
        token
    } = JSON.parse(localStorage.getItem('userData'));

    return (
        <ReportStyled>
            <Header>
                <span>Olá, {name}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                <IoLogOutOutline />
            </Header>
            <Entries>
                
            </Entries>
        </ReportStyled>
    );
}