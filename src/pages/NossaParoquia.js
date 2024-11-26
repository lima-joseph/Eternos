import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card text-center p-3">
              <img 
                src="https://scontent.fcpq4-1.fna.fbcdn.net/v/t39.30808-1/453490345_914676044030527_5722009225405350005_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=AFGpEUcI9aUQ7kNvgFN8tMp&_nc_zt=24&_nc_ht=scontent.fcpq4-1.fna&_nc_gid=AYn78lM3YdQaboh37yUJqfB&oh=00_AYAKyCRjlNZZBHGyUrLvxHc55jLdofXsqER95_VpgG8fEg&oe=674BD8BC" 
                alt="Logo"
                className="rounded-circle"
              />
              <h5 className="card-title mt-2">Pascom São Francisco De Assis - SBO</h5>
            <div className="card-body">
              <p className="card-text">
                <b>Paróquia São Francisco de Assis</b> <br />
                Santa Bárbara d'Oeste / SP <br />
                Diocese de Piracicaba
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sobre</h5>
              <p className="card-text">
                Rua do Chá, 879 - Jardim Pérola <br />
                Santa Bárbara d´Oeste / SP <br />
                CEP: 13.454-183 <br />
                Fone: (19) 3473-1786 (WhatsApp) / (19) 3626-3020 <br />
                <br />
                <b>Pároco</b>: Frei Itacir Gasperin<br />
                <b>Vigário Paroquial</b>: Frei Geraldo Monteiro<br />
                <br />

                HORÁRIO ATENDIMENTO:

                SECRETARIA
                Segunda a Sexta-feira: das 8h às 12h e das 13h30 às 16h30
                Sábado: das 8h às 12h

                ATENDIMENTO PELOS FREIS:
                Segunda-feira: das 9h30 às 11h30
                Terça-feira: das 15h às 16h30
                Sexta-feira: das 15h às 16h30
                Sábado: das 9h30 às 11h30

                HORÁRIO DAS MISSAS:

                MATRIZ SÃO FRANCISCO DE ASSIS
                Domingo: 7h30, 9h30 e 19h
                Segunda-feira: 15h
                Terça e Quinta: 19h30
                Sexta: 7h30
                Sábado: 16h
              </p>
              <a href="#" className="btn btn-primary">Ver mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
