import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import ExpiredSessionModal from "../../components/ExpiredSessionModal";
import { FormStyled, SubmitButton, TextInput } from "../../components/Form/style";
import { postEntry } from "../../services/mywallet-api";
import { AddEntryStyled } from "./style";

export default function AddEntry ({userData}){
    const location = useLocation().pathname;
    const history = useHistory();
    const [header, setHeader] = useState('')
    const [multiplier, setMultiplier] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {token} = userData;
    useEffect(()=>{
        if (location === '/add-expense') {
            setMultiplier(-1);
            setHeader('Nova saída')
        } else {
            setMultiplier(1);
            setHeader('Nova entrada')
        }
    },[location])

    useEffect(()=>{
        if (!userData.token){
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false)
        }
    },[userData])
    
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const date = dayjs();

    function processError(status){
        if (status === 401){
            setIsModalOpen(true);
        }
    }

    function submitEntry(e){
        e.preventDefault();
        const body = {
            description,
            value: value * multiplier,
            date
        }
        
        postEntry({body, token})
            .then(()=>history.push('/report'))
            .catch((err)=>processError(err.response.status))
    }

    return (
        <AddEntryStyled>
            <ExpiredSessionModal isOpen={isModalOpen}/>
            <span>{header}</span>
            <FormStyled onSubmit={(e)=>submitEntry(e)}>
                <TextInput required type='number' step='0.01' placeholder='Valor' onChange={(e)=>(setValue(e.target.value))}/>
                <TextInput required type='text' placeholder='Descrição' onChange={(e)=>(setDescription(e.target.value))}/>
                <SubmitButton type='submit' value='Salvar entrada'/>
            </FormStyled>
        </AddEntryStyled>
    );
}