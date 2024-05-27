import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Home from './Components/Home';
import Recidencies from './Components/Residencies';
function App() {
  return (
    <div className="App">

      <Header/>
        <Home/>
        <Recidencies/>

    </div>
  );
}

export default App;
