/* eslint-disable react/no-children-prop */
import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TextWrapper } from '../../styles';
import {
  CheckboxWrapper,
  Container,
  DayWrapper,
  Header,
  IMGWrapper,
  Wrapper,
} from './styles';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string;
}

function Modal({
  modalIsVisible,
  setModalIsVisible,
  userID,
}: IModalProps): JSX.Element {
  const [seg, setSeg] = useState<string>('');
  const [ter, setTer] = useState<string>('');
  const [qua, setQua] = useState<string>('');
  const [qui, setQui] = useState<string>('');
  const [sex, setSex] = useState<string>('');

  const [segCheck, setSegCheck] = useState<boolean>(false);
  const [terCheck, setTerCheck] = useState<boolean>(false);
  const [quaCheck, setQuaCheck] = useState<boolean>(false);
  const [quiCheck, setQuiCheck] = useState<boolean>(false);
  const [sexCheck, setSexCheck] = useState<boolean>(false);

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const [clicked, setClicked] = useState<boolean>(false);

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

  const handlePhotoClick = () => {
    setClicked(!clicked);
  };

  const [sendingUrl, setSendingUrl] = useState('');

  const handleConfirmModalCall = (url: any) => {
    setConfirmModalIsVisible(true);
    setSendingUrl(url);
  };

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const [openAt, setOpenAt] = useState<Dayjs | null>(null);
  const [closeAt, setCloseAt] = useState<Dayjs | null>();

  const handleFormSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      handleSubmit(
        [
          {
            field: 'segunda',
            value: seg,
          },
          {
            field: 'terca',
            value: ter,
          },
          {
            field: 'quarta',
            value: qua,
          },
          {
            field: 'quinta',
            value: ter,
          },
          {
            field: 'sexta',
            value: ter,
          },
        ],
        userID
      );
    },
    [
      title,
      desc,
      userID,
      seg,
      ter,
      qua,
      qui,
      sex,
      segCheck,
      terCheck,
      quaCheck,
      quiCheck,
      sexCheck,
    ]
  );

  const handleDayChange =
    (day: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;

      // const formattedTime = `${openAt?.hour()}:${(openAt?.minute() < 10 ? '0' : '') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute() < 10 ? '0' : '') + closeAt?.minute()}`;

      let formattedTimeOpen = '';
      let formattedTimeClose = '';

      if (openAt !== null) {
        formattedTimeOpen = `${openAt.hour()}:${
          (openAt.minute() < 10 ? '0' : '') + openAt.minute()
        }`;
      }
      if (closeAt !== undefined && closeAt !== null) {
        formattedTimeClose = `${closeAt?.hour()}:${
          (closeAt.minute() < 10 ? '0' : '') + closeAt.minute()
        }`;
      }

      const formattedTime = `${formattedTimeOpen} ás ${formattedTimeClose}`;

      switch (day) {
        case 'seg':
          setSegCheck(checked);
          setSeg(checked ? formattedTime : '');
          break;
        case 'ter':
          setTerCheck(checked);
          setTer(checked ? formattedTime : '');
          break;
        case 'qua':
          setQuaCheck(checked);
          setQua(checked ? formattedTime : '');
          break;
        case 'qui':
          setQuiCheck(checked);
          setQui(checked ? formattedTime : '');
          break;
        case 'sex':
          setSexCheck(checked);
          setSex(checked ? formattedTime : '');
          break;
        default:
          break;
      }
    };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container isVisible={modalIsVisible} onSubmit={handleFormSubmit}>
      <Header>
        <h1 style={{ fontSize: '26px', color: '#1b1b1b' }}>
          Horário de funcionamento
        </h1>
        <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b" />
      </Header>

      <DayWrapper>
        <h3>Segunda</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <TimeField
              label="Abre às"
              format="HH:mm"
              value={openAt}
              onChange={(newValue) => setOpenAt(newValue)}
              sx={{ width: '100%' }}
            />
            <TimeField
              label="Fecha às"
              format="HH:mm"
              value={closeAt}
              onChange={(newValue) => setCloseAt(newValue)}
              sx={{ width: '100%' }}
            />
          </Box>
        </LocalizationProvider>
      </DayWrapper>

      <hr />

      <DayWrapper>
        <h3>Terça</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <TimeField
              label="Abre às"
              format="HH:mm"
              value={openAt}
              onChange={(newValue) => setOpenAt(newValue)}
              sx={{ width: '100%' }}
            />
            <TimeField
              label="Fecha às"
              format="HH:mm"
              value={closeAt}
              onChange={(newValue) => setCloseAt(newValue)}
              sx={{ width: '100%' }}
            />
          </Box>
        </LocalizationProvider>
      </DayWrapper>

      <StyledButton
        children="Salvar textos"
        w="larger"
        type="submit"
        mt="1rem"
      />
    </Container>
  );
}

export { Modal };
