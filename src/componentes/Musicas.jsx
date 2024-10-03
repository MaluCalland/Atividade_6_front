import React from 'react';
import ReactDOM from 'react-dom/client';

function Artista(props) {
    return <li>Músicas do Bob Marley e The Wailers: { props.brand }</li>;
  }
  
  function Musicas() {
    const musicas = [
      {id: 1, brand: 'One Love'},
      {id: 2, brand: 'Could You Be Loved'},
      {id: 3, brand: 'Three Little Birds'},
      {id: 4, brand: 'Jamming'}
    ];

    return (
      <>
        <h3>Músicas:</h3>
        <ul>
          {musicas.map((musica) => <Artista key={musica.id} brand={musica.brand} />)}
        </ul>
      </>
    );
  };

  const root1 = ReactDOM.createRoot(document.getElementById('root'));
  root1.render(<Musicas/>);

export default Musicas