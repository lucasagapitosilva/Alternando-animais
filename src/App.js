
import CardAnimal from './Componentes/CardAnimal/'
import CardInformacoes from './Componentes/CardInformacoes/'
import Topo from './PaginaPrincipal/Topo/'

import { useState } from 'react'
import './App.css';

function App() {

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState('cachorro');

  return (

      <div>
        <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoDoComponenteCard} />
        <CardAnimal tipoAnimal={tipoDoComponenteCard} />
        <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
      </div>
  );
}

export default App;
