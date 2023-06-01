import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CardExample = () => {
  return (
    <Card className="card-adp">
      <div className="iconContainer">
        <i className="pi pi-chart-line icon-adp"></i>
      </div>
      <div className="infoContainer">
        <h2 className="title-adp">Título del Porcentaje</h2>
        <div className="valueContainer">
          <span className="value-adp">85%</span>
          <ProgressBar value={85} className="progressBar-adp" />
        </div>
        <p className="description-adp">Breve descripción justificada del porcentaje</p>
        <Button icon={<FontAwesomeIcon icon={faDownload} className='icon2-sdp'/>} label="Descargar" className="p-button-raised p-button-rounded p-button-lg downloadButton-adp" />
      </div>
    </Card>
  );
}

export default CardExample;
