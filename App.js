import { useState } from 'react';
import './App.css';

export default function App(){
  const [peso,setPeso]=useState('');
  const[altura,setAltura]=useState('');
  const [mensagem,setmensagem]=useState('');

  function calcularIMC(){
    const alt=altura/100;
    const imc=peso/(alt*alt);

    if(imc <18.6){
      setmensagem("voce esta abaixo do peso! Seu IMC: " +imc.toFixed(2))
    }else if(imc >=18.6 && imc < 24.9){
      setmensagem("Peso ideal ! seu IMC: " + imc.toFixed(2))
    }else if(imc >=24.9 && imc < 34.9){
      setmensagem("voce esta levemente acima do peso! seu imc: " +imc.toFixed(2))
    }else if(imc> 34.9){
      setmensagem("Cuidado Obesidade! Seu imc: " +imc.toFixed(2))
    }
    
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input type="text"
        placeholder="Peso em (kg) Ex:90"
        value={peso}
        onChange={(e)=>setPeso(e.target.value)}/>
        <input type="text" placeholder="Altura em (cm) Ex:180"
        value={altura}
        onChange={(e)=>setAltura(e.target.value)}/>
      
      <button onClick={calcularIMC}>calcular</button>
      </div>
      <h2>{mensagem}
      </h2>
    </div>
  )
}