import { useTranslation } from 'react-i18next';
import './App.css';
import { Header } from './components/header/Header';

function App() {
  const { t } = useTranslation();

  const releaseDate = new Date('2021-12-14');
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="d-flex flex-column align-items-start">
          <h1 className="font-weight-normal mb-3">{t('welcome_to_react')}</h1>
          <p>{t('dynamic_value', {number_of_days})}</p>
        </div>
      </div>
    </>
  );
}

export default App;
