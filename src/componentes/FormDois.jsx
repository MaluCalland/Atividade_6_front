import React from 'react';
import ReactDOM from 'react-dom/client';

function FormDois() {
  return (
    <form>
      <label>Digite seu nome:
        <input type="text" />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormDois />);

export default FormDois;