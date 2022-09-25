import { useNavigate } from "react-router-dom";
import logo from './assets/icons8-connect-develop-48.svg'
import friends from './assets/animation_500_l859okyg.gif';
import CardView from './components/LoginCardView';
import './MainApp.css';

function App() {
  return (
    <div className="MainApp">
      <header className="App-header">
        <div className='App-head'>
          <img src={logo} alt='No image'></img>
          <h2 className="headone">Authentication App</h2> 
           </div>
        <img src={friends} alt="loading..." />
      </header>
      <div className='card'>
      <CardView></CardView>
      </div>
    </div>
  );
}

export default App;
