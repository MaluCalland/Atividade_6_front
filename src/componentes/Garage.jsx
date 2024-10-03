import React from "react";
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <li>Eu sou um { props.brand }</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];

    return (
      <>
        <h3>Quem mora na minha garagem?</h3>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }
  
  const root1 = ReactDOM.createRoot(document.getElementById('root'));
  root1.render(<Garage/>);

 export default Garage;