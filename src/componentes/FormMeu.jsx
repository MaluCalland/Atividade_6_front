import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormMeu() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(inputs);
    alert(`Nome do Aluno: ${inputs.nome} `);
    alert(`Matrícula do Aluno: ${inputs.matricula} `);
    alert(`Curso do Aluno: ${inputs.curso} `);
    alert(`Idade do Aluno: ${inputs.idade} `);
    alert(`E-mail do Aluno: ${inputs.email} `);
    alert(`CPF do Aluno: ${inputs.cpf} `);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Nome Completo:
      <input 
        type="text" 
        name="nome" 
        value={inputs.nome || ""} 
        onChange={handleChange}
      />
      </p>
      <p>Matricula:
      <input 
        type="number" 
        name="matricula" 
        value={inputs.matricula || ""} 
        onChange={handleChange}
      />
      </p>
      <p>Curso:
        <input 
          type="text" 
          name="curso" 
          value={inputs.curso || ""} 
          onChange={handleChange}
        />
        </p>
        <p>Idade:
        <input 
          type="number" 
          name="idade" 
          value={inputs.idade || ""} 
          onChange={handleChange}
        />
        </p>
        <p>E-mail:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </p>
        <p>CPF:
        <input 
          type="number" 
          name="cpf" 
          value={inputs.cpf || ""} 
          onChange={handleChange}
        />
        </p>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormMeu />);

export default FormMeu;