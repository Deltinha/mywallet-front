import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import {ModalStyled} from './styled';

export default function ExpiredSessionModal({isOpen}){
    const history = useHistory();
    const {handleLogout} = useContext(UserContext);

    return (
        <ModalStyled isOpen={isOpen}>
            <span>
                Sessão espirada. Logue-se para continuar.
            </span>
            <button onClick={()=>{
                history.push('/');
                handleLogout();
            }}>Continuar</button>
        </ModalStyled>
    );
}