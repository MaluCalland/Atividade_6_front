import React from 'react';
import ReactDOM from 'react-dom/client';

function Itens(props) {
    return <li>Item: { props.brand }</li>;
  }
  
  function Mercado() {
    const itens = [
      {id: 1, brand: 'Banana'},
      {id: 2, brand: 'Pão'},
      {id: 3, brand: 'Queijo'},
      {id: 4, brand: 'Uva'}
    ];

    return (
      <>
        <h3>Itens do Mercado: </h3>
        <ul>
          {itens.map((item) => <Itens key={item.id} brand={item.brand} />)}
        </ul>
      </>
    );
  }

  const root1 = ReactDOM.createRoot(document.getElementById('root'));
  root1.render(<Mercado/>);

export default Mercado