import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Garage from './componentes/Garage';
import Mercado from './componentes/Mercado';
import Musicas from './componentes/Musicas';
import FormUm from './componentes/FormUm';
import FormDois from './componentes/FormDois';
import FormTres from './componentes/FormTres';
import FormQuatro from './componentes/FormQuatro';
import FormCinco from './componentes/FormCinco';
import FormSeis from './componentes/FormSeis';
import FormMeu from './componentes/FormMeu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h2 className='parteUm'>Parte 1</h2>
      <h2 className='tituloUm'>Reprodução do exemplo do uso de listas, com chaves, em React</h2>
      <Garage/>
      <h2 className='tituloUm'>Exemplo 1</h2>
      <Mercado/>
      <h2 className='tituloUm'>Exemplo 2</h2>
      <Musicas/>
    </div>
    <div>
      <h2 className='parteDois'>Parte 2</h2>
      <h2 className='tituloDois'>Exemplo 1</h2>
      <h3>Adicionando formulários no React:</h3>
      <FormUm/>
      <h2 className='tituloDois'>Exemplo 2</h2>
      <h3>Usando o useStateHook para gerenciar a entrada:</h3>
      <FormDois/>
      <h2 className='tituloDois'>Exemplo 3</h2>
      <h3>Adicionando um botão de envio e um manipulador de eventos no onSubmitatributo:</h3>
      <FormTres/>
      <h2 className='tituloDois'>Exemplo 4</h2>
      <h3>Escrevendo um formulário com dois campos de entrada:</h3>
      <FormQuatro/>
      <h2 className='tituloDois'>Exemplo 5</h2>
      <h3>Uma textarea simples com algum conteúdo:</h3>
      <FormCinco/>
      <h2 className='tituloDois'>Exemplo 6</h2>
      <h3>Uma caixa de seleção simples, onde o valor selecionado "Volvo" é inicializado no construtor:</h3>
      <FormSeis/>
      <h2 className='tituloDois'>Meu exemplo</h2>
      <h3>Escrevendo meu exmplo com base em um formulário com dois campos de entrada: </h3>
      <FormMeu/>
    </div>
    </>
  )
}

export default App