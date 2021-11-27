import {
  ReportStyled,
  Header,
  Entries,
  Item,
  Balance,
  Value,
  Date,
  Description,
  ButtonsWrapper,
  Button,
} from './style';
import {
  IoLogOutOutline,
  IoRemoveCircleOutline,
  IoAddCircleOutline,
} from 'react-icons/io5';
import { useEffect, useState, useContext } from 'react';
import { getEntries } from '../../services/mywallet-api';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useHistory } from 'react-router-dom';
import ExpiredSessionModal from '../../components/ExpiredSessionModal';
import { UserContext } from '../../contexts/UserContext';

export default function Report({ userData }) {
  const history = useHistory();
  dayjs.locale('pt-br');
  const [balance, setBalance] = useState([]);
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleLogout } = useContext(UserContext);

  function processError(status) {
    if (status === 401) {
      setIsModalOpen(true);
    }
  }

  useEffect(() => {
    getEntries(userData.token)
      .then((res) => setEntries(res.data))
      .catch((err) => processError(err.response?.status));
  }, []);

  useEffect(() => {
    let sum = 0;
    entries.forEach((item) => (sum += item.value));
    setBalance(sum);
  }, [entries]);

  return (
    <ReportStyled>
      <ExpiredSessionModal isOpen={isModalOpen} />
      <Header>
        <span>Olá, {userData.name}</span>
        <button
          onClick={() => {
            handleLogout();
            history.push('/');
          }}
        >
          <IoLogOutOutline />
        </button>
      </Header>
      <Entries>
        {entries.length === 0 && (
          <span>Não há registros de entrada ou saída</span>
        )}
        {entries.map((entry, index) => (
          <Item key={index}>
            <div>
              <Date>{dayjs(entry.date).format('DD/MM')}</Date>
              <Description>{entry.description}</Description>
            </div>
            <Value>
              {entry.value.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </Value>
          </Item>
        ))}
      </Entries>
      <Balance>
        {entries.length > 0 && (
          <>
            SALDO{' '}
            <Value>
              {balance.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </Value>
          </>
        )}
      </Balance>
      <ButtonsWrapper>
        <Button onClick={() => history.push('/add-incoming')}>
          <IoAddCircleOutline />
          <span>Nova entrada</span>
        </Button>
        <Button onClick={() => history.push('/add-expense')}>
          <IoRemoveCircleOutline />
          <span>Nova saída</span>
        </Button>
      </ButtonsWrapper>
    </ReportStyled>
  );
}
