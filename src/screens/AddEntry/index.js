import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { FormStyled, SubmitButton, TextInput } from "../../components/Form/style";
import { postEntry } from "../../services/mywallet-api";
import { AddEntryStyled } from "./style";

export default function AddEntry (){
    const token = JSON.parse(localStorage.getItem('userData')).token;
    const location = useLocation().pathname;
    const history = useHistory();
    const [header, setHeader] = useState('')
    const [multiplier, setMultiplier] = useState(1);
    useEffect(()=>{
        if (location === '/add-expense') {
            setMultiplier(-1);
            setHeader('Nova saída')
        } else {
            setMultiplier(1);
            setHeader('Nova entrada')
        }
    },[location])
    
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const date = dayjs();

    function processError(status){

    }

    function submitEntry(e){
        e.preventDefault();
        const body = {
            description,
            value: value * multiplier,
            date
        }
        
        postEntry({body, token})
            .then((res)=>history.push('/report'))
            .catch((err)=>processError(err.message.status))
    }

    return (
        <AddEntryStyled>
            <span>{header}</span>
            <FormStyled onSubmit={(e)=>submitEntry(e)}>
                <TextInput required type='number' placeholder='Valor' onChange={(e)=>(setValue(e.target.value))}/>
                <TextInput required type='text' placeholder='Descrição' onChange={(e)=>(setDescription(e.target.value))}/>
                <SubmitButton type='submit' value='Salvar entrada'/>
            </FormStyled>
        </AddEntryStyled>
    );
}