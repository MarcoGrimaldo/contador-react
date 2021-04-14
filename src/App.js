import './App.css';
import { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  const [counter,setCounter] = useState(0);
  const [salto,setSalto] = useState(1);

  const add = () => {
    setCounter(counter + salto);
  };

  const substract = () => {
    setCounter(counter - salto);
  };

  const addSalto = () => {
    setSalto(salto + 1);
  };

  const substractSalto = () => {
    setSalto(salto - 1);
  };


  return (
    <main className="container">
      <section className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel center" style={{backgroundColor: "#126e82"}}>
            <h1 className="white-text">
              {counter}
            </h1>
            <button
              className="indigo waves-effect waves-light btn"
              onClick={add}
              style={{width: "33%"}}
            >
              <i className="material-icons">add</i>
            </button>

            <button
              className="indigo waves-effect waves-light btn"
              onClick={substract}
              style={{width: "33%"}}
            >
              <i className="material-icons">remove</i>
            </button>

            <button
              className="indigo waves-effect waves-light btn"
              onClick={() => setCounter(0)}
              style={{width: "66%",marginTop:"1rem"}}
            >
              Reset
            </button>
            
          </div>
        </div>

        <div className="col s12 m6 offset-m3 center">
          
          <h6>Salto actual: </h6>
          
        </div>
        <div className="col s12 m6 offset-m3 center">
          <div className="col s4">
            <button 
              className=" indigo darken-2 btn-floating btn-large waves-effect waves-light"
              onClick={addSalto}
            >
              <i className="material-icons">add</i>
            </button>
          </div>

          <div className="col s4">
            <h5>{salto}</h5>
          </div>

          <div className="col s4">
            <button 
              className=" indigo darken-2 btn-floating btn-large waves-effect waves-light"
              onClick={substractSalto}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>

          <div className="col s12">
            <button
              className="indigo darken-2 waves-effect waves-light btn"
              onClick={() => setSalto(1)}
              style={{width: "33%",marginTop:"1rem"}}
            >
              Reset Salto
            </button>
          </div>

        </div>
      </section>
      
    </main>
  );
}

export default App;
