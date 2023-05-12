import "./App.css";
import Container from "./components/Container";
import DatosPersonales from "./components/DatosPersonales";
import Interesados from "./components/Interesados";
import Login from "./components/Login";
import { ContextProvider } from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="">
          <Login />
        </div>
        <div className="containerPerso">
          <div className="rowPerso">
            <DatosPersonales />
          </div>
          <div class="rowPerso">
            <Container />
          </div>
          <div class="rowPerso">
            <Interesados />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
