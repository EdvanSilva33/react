import { useState, useEffect,  } from "react";
import './index.css'

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState(' ');
    // let [resultado, setResultado] = useState(' ');

    useEffect(()=> {
        console.log('O componente iniciou');

        return () => {
            console.log(' O componete finalizou');
        }
    }, []);

    useEffect(() => {
        console.log('estado mudou nome');
    }, [nome]);
  
    useEffect(()=>{

        
        console.log('valor da materia A mudou' + materiaA)
    }, [materiaA]);

    const mudarNome = (e) => {
        setNome(() => {

            return e.target.value;


        })
    }
    const rederizarResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        
       
        if (media >= 7) {
            return (
                
                <p>Olá, {nome} Você foi aprovado com a media {soma} </p>
            )
        }
        else {
            return (
                <p>Olá, {nome} Você não foi aprovado com a media {soma}!</p>
            )
        }
    }

    return (
        <form >
          <ul>
                {[1, 2, 3].map(item => (
                      <li key={item}>{item} </li>
                  
                ))}
          </ul>

            <input type="text" placeholder="Digite seu nome" onChange={mudarNome} />
            <input type="number" placeholder="Nota da materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota da materia B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota da materia c" onChange={e => setMateriaC(parseInt(e.target.value))} />
             
            <h2> 
              
                  {rederizarResultado() }
            </h2>

        </form>

    )

}

export default Formulario;