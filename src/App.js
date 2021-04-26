import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Slider from './components/Slider';

function App() {
  return (
    <div className="container">
    <Header />
    <Weather />
    <Slider />
    </div>
  );
}

export default App;
