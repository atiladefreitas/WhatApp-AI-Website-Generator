import { useState } from 'react';
import { BiSend, BiCheck } from 'react-icons/bi';
import { Container } from './styles';
import { toast } from 'react-toastify';
interface Props {
  submit: () => void;
}

export default function SendButton1({ submit }: Props): JSX.Element {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
    submit();
  };

  return (
    <Container>
      <button
        onClick={handleClick}
        className={isSending || isSent ? 'sending' : ''}
      >
        <span className="icon material-symbols-outlined">
          {isSent ? (
            <BiCheck size={26} color={'#fff'} />
          ) : (
            <BiSend size={26} color={'#fff'} />
          )}
        </span>
        <span className="text">
          {isSending ? 'Enviando ...' : isSent ? 'Enviado' : 'Enviar'}
        </span>
      </button>
    </Container>
  );
}
