import { Link } from "react-router-dom";
import { FormStyled, SubmitButton, TextInput } from "../../components/Form/style";
import MyWalletLogo from "../../components/MyWalletLogo";
import { LoginStyled } from "./style";

export default function LogIn(){
    return (
        <LoginStyled>
            <MyWalletLogo />
            <FormStyled>
                <TextInput type='email' required placeholder='E-mail'/>
                <TextInput type='password' required placeholder='Senha'/>
                <SubmitButton type='submit' value='Entrar'/>
            </FormStyled>
            <Link to='/sign-up'>Primeira vez? Cadastre-se!</Link>
        </LoginStyled>
    );
}