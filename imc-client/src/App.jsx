import { useState } from 'react'

function App() {

  const [num, setNum] = useState({
    peso: 0,
    estatura: 0
  });

  const [imc, setImc] = useState(0);

  const handleChange = (e) => {
    setNum({
      ...num,
      [e.target.name]: parseFloat(e.target.value)
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const SumaController = await import('./modules/control.js').then(module => module.default);
    const resultado = await SumaController.getIMC(num);
    console.log(resultado);
    setImc(resultado);
  }

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Tu nombre completo - grado y grupo</a>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Calculadora de IMC</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <div class="form-floating">
              <input type="number" class="form-control" name="peso" id="peso" placeholder="peso" onChange={handleChange} />
              <label for="floatingInput">Peso en Kg</label>
            </div>
          </div>
          <div className="col-4">
            <div class="form-floating">
              <input type="number" class="form-control" name="estatura" id="estatura" placeholder="estatura" onChange={handleChange} />
              <label for="floatingInput">Altura en m</label>
            </div>
          </div>
          <div className="col-4">
            <button className="btn btn-primary col-12 h-100" onClick={handleSubmit}>Calcular IMC</button>
          </div>
        </div>
        <br />
        <h3>Resultado de IMC: {imc}</h3>
      </div>
    </>
  )
}

export default App
