import MyWalletLogo from "../../components/MyWalletLogo";
import { SubmitButton } from "../../components/SubmitButton/style";
import { TextInput, InputLabel } from "../../components/TextInput/style";
import { FormStyled, SignUpStyled } from "./style";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../services/mywallet-api";

export default function SignUp(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [emailConflict, setEmailConflict] = useState(false)
    const [passwordsNotMatching, setPasswordsNotMatching] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(false)
    let history = useHistory();

    function processError(status){
        if (status === 409){
            alert('o email inserido já está sendo usado')
            setEmailConflict(true)
        }
    }

    function submitForm (e){
        e.preventDefault();
        setSubmitDisabled(true);
        setPasswordsNotMatching(false);

        if (password !== passwordTwo){
            setPasswordsNotMatching(true);
            return;
        }
        
        const body = {
            name,
            email,
            password
        };

        postSignUp(body)
            .then(()=>history.push('/'))
            .catch((res)=>{
                setSubmitDisabled(false)
                processError(res.response.status)
            });
    }

    return(
        <SignUpStyled>
            <MyWalletLogo />
            <FormStyled onSubmit={(e)=>submitForm(e)}>
                <TextInput redBorder={false} type="text" required placeholder='Nome' onChange={(e)=>setName(e.target.value)}/>
                <TextInput redBorder={emailConflict} type="email" id='email' required placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/>
                {emailConflict && <InputLabel for='email'>o email inserido já está sendo usado</InputLabel>}
                <TextInput redBorder={passwordsNotMatching} type="password" required placeholder='Senha' onChange={(e)=>setPassword(e.target.value)}/>
                <TextInput redBorder={passwordsNotMatching} type="password" required placeholder='Confirme a senha' onChange={(e)=>setPasswordTwo(e.target.value)}/>
                {passwordsNotMatching && <InputLabel for='email'>as senhas inseridas são diferentes</InputLabel>}
                <SubmitButton disabled={submitDisabled} type='submit' value='Cadastrar'/>
            </FormStyled>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </SignUpStyled>
    );
}