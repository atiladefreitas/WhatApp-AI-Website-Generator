import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

interface ICalendar {
  //horário funcionamento
  segunda: string | null;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;
  mainColor: string;
  secondaryColor: string;
  isAutonomous: string;
}

interface Contact {
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  isAutonomous: string;
  businessName: string;
  phone: string;
  id: string;
}

interface Props {
  phone: string;
}

function Calendar({
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
  domingo,
  mainColor,
  secondaryColor,
  isAutonomous,
}: ICalendar): JSX.Element {
  const { id } = useParams();

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  const converted = id;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/${converted}`
        );
        setData(response.data);
      } catch (error) {
        console.error('erro');
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => console.log('Data fetched successfully!'))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <div className="sixth-wrapper">
        {isAutonomous == '1' ? (
          <h1 style={{ color: mainColor }}>Horário de atendimento</h1>
        ) : (
          <h1 style={{ color: mainColor }}>Horário de funcionamento</h1>
        )}

        <div className="table">
          <div className="header" style={{ backgroundColor: secondaryColor }}>
            {isAutonomous == '1' ? (
              <h2>Horário de atendimento</h2>
            ) : (
              <h2>Horário de funcionamento</h2>
            )}
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Segunda feira:</h1>
            </div>
            <div className="value">
              <h3>{segunda}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1> Terça feira:</h1>
            </div>
            <div className="value">
              <h3>{terca}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Quarta feira:</h1>
            </div>
            <div className="value">
              <h3>{quarta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Quinta feira:</h1>
            </div>
            <div className="value">
              <h3>{quinta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Sexta feira:</h1>
            </div>
            <div className="value">
              <h3>{sexta}</h3>
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Sábado:</h1>
            </div>
            <div className="value">
              {sabado === '' ? <h3>Fechado</h3> : <h3>{sabado}</h3>}
            </div>
          </div>

          <div className="line">
            <div className="value" style={{ borderRight: '1px solid #000' }}>
              <h1>Domingo:</h1>
            </div>
            <div className="value">
              {domingo === '' ? <h3>Fechado</h3> : <h3>{domingo}</h3>}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export { Calendar };
