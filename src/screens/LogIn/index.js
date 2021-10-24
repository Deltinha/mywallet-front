import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormStyled, InputLabel, SubmitButton, TextInput } from "../../components/Form/style";
import MyWalletLogo from "../../components/MyWalletLogo";
import { postLogIn } from "../../services/mywallet-api";
import { LoginStyled } from "./style";

export default function LogIn({token}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (token) {
            history.push('/report')
        }
    }, [history, token])

    function processError(status){
        if (status === 401){
           setErrorMessage('E-mail ou senha incorretos.')
        }
        if (status === 500){
            setErrorMessage('Falha no login. Tente mais tarde.')
        }
    }

    function redirectToHome(){
        history.push('/report')
    }

    function saveData(data){
        localStorage.setItem('userData',JSON.stringify(data))
    }

    function submitLogIn(e){
        e.preventDefault();
        const body = {
            email,
            password
        }
        setErrorMessage('');

        postLogIn(body)
            .then((res)=>{
                saveData(res.data);
                redirectToHome();
            })
            .catch((err)=>processError(err.response.status))
    }

    return (
        <LoginStyled>
            <MyWalletLogo />
            <FormStyled onSubmit={(e)=>submitLogIn(e)}>
                <TextInput type='email' required placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/>
                <TextInput type='password' required placeholder='Senha' onChange={(e)=>setPassword(e.target.value)}/>
                <SubmitButton disabled={disabledButton} id='login-button' type='submit' value='Entrar'/>
                {errorMessage.length !== 0 && <InputLabel for='login-button'>{errorMessage}</InputLabel>}
            </FormStyled>
            <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </LoginStyled>
    );
}