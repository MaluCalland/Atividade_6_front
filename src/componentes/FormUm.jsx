import { useState } from "react";
import ReactDOM from 'react-dom/client';

function FormUm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Digite seu nome:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormUm />);

export default FormUm;