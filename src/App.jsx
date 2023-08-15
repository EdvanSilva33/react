import { useState } from 'react';
import Perfil from './components';
import Formulario from './components/Formulario';
import './App.css'
import RespoList from './components/Repolist';

function App() {
 
const [fomularioVisivel, setFormularioVisel] = useState(true);
 
  return (
    <>
    <Perfil nomeUsuario='EdvanSilva33'/>
    
     <RespoList/>

    {fomularioVisivel && (
      <Formulario/>
    )}

 <button type='button' onClick={()=> setFormularioVisel(!fomularioVisivel)}>Botão visivel</button>
      
    </>
  )

}


export default App
