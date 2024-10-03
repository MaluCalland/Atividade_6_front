import { useState } from "react";
import ReactDOM from 'react-dom/client';

function FormTres() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`O nome que você digitou foi: ${name} `);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Digite seu nome:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormTres />);

export default FormTres;