import { useHistory } from 'react-router';
import {ModalStyled} from './styled';

export default function ExpiredSessionModal({isOpen}){
    const history = useHistory();

    return (
        <ModalStyled isOpen={isOpen}>
            <span>
                Sessão espirada. Logue-se para continuar.
            </span>
            <button onClick={()=>history.push('/')}>Continuar</button>
        </ModalStyled>
    );
}