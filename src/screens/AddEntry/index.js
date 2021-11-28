import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  FormStyled,
  SubmitButton,
  TextInput,
} from '../../components/Form/style';
import { ThemedAlert } from '../../components/ThemedAlert';
import { postEntry } from '../../services/mywallet-api';
import { AddEntryStyled } from './style';

export default function AddEntry({ userData, handleLogout }) {
  const location = useLocation().pathname;
  const history = useHistory();
  const [header, setHeader] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [multiplier, setMultiplier] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { token } = userData;

  useEffect(() => {
    if (location === '/add-expense') {
      setMultiplier(-1);
      setHeader('Nova saída');
      setButtonText('Salvar saída');
    } else {
      setMultiplier(1);
      setHeader('Nova entrada');
      setButtonText('Salvar entrada');
    }
  }, [location]);

  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const date = dayjs();

  function processError(status) {
    if (status === 401) {
      ThemedAlert.fire('Sua sessão expirou');
      handleLogout();
    }
  }

  function submitEntry(e) {
    e.preventDefault();
    const body = {
      description,
      value: value * multiplier,
      date,
    };
    setButtonDisabled(true);
    postEntry({ body, token })
      .then(() => history.push('/report'))
      .catch((err) => {
        setButtonDisabled(false);
        processError(err.response?.status);
      });
  }

  return (
    <AddEntryStyled>
      <span>{header}</span>
      <FormStyled onSubmit={(e) => submitEntry(e)}>
        <TextInput
          required
          type="number"
          step="0.01"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
        />
        <TextInput
          required
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubmitButton
          disabled={buttonDisabled}
          type="submit"
          value={buttonText}
        />
      </FormStyled>
    </AddEntryStyled>
  );
}
