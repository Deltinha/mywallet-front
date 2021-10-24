import { ReportStyled, Header, Entries, Item, Balance, Value, Date, Description, ButtonsWrapper, Button } from "./style";
import { IoLogOutOutline, IoRemoveCircleOutline, IoAddCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from "react";
import { getEntries } from "../../services/mywallet-api";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useHistory } from "react-router";

export default function Report(){
    const history = useHistory();
    dayjs.locale('pt-br');
    const {
        name,
        token
    } = JSON.parse(localStorage.getItem('userData'));
    const [balance, setBalance] = useState([]);
    const [entries, setEntries] = useState([]);
    useEffect(()=>{
        getEntries(token)
            .then(res=>setEntries(res.data))
            .catch(err=>console.log(err.response.status))
    },[])

    useEffect(()=>{
        let sum = 0;
        entries.forEach(item=>sum+=item.value)
        setBalance(sum)
    },[entries])

    return (
        <ReportStyled>
            <Header>
                <span>Olá, {name}</span>
                <IoLogOutOutline />
            </Header>
            <Entries>
                {entries.map((entry)=>(
                <Item>
                    <div>
                        <Date>{dayjs(entry.date).format('DD/MM')}</Date>
                        <Description>{entry.description}</Description>
                    </div>
                    <Value>{entry.value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Value>
                </Item>
                ))}
            </Entries>
            <Balance>SALDO <Value>{balance.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Value></Balance>
            <ButtonsWrapper>
                <Button onClick={()=>history.push('/add-incoming')}>
                    <IoAddCircleOutline />
                    <span>
                        Nova entrada
                    </span>
                </Button>
                <Button onClick={()=>history.push('/add-expense')}>
                    <IoRemoveCircleOutline />
                    <span>
                        Nova saída
                    </span>
                </Button>
            </ButtonsWrapper>
        </ReportStyled>
    );
}