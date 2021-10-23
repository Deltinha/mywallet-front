import { ReportStyled } from "./style";

export default function Report(){
    const {
        name,
        userId,
        token
    } = JSON.parse(localStorage.getItem('userData'));

    return (
        <ReportStyled>
            <div>
                <span>{name}</span>
                <span>X</span>
            </div>
        </ReportStyled>
    );
}