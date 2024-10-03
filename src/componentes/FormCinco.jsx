import { useState } from "react";
import ReactDOM from "react-dom/client";

function FormCinco() {
  const [textarea, setTextarea] = useState(
    "O conteúdo de uma textarea vai no atributo value"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormCinco />);

export default FormCinco;