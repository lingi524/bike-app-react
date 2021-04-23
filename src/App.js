import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import Slider from './components/Slider';
import Answer from './components/Answer';

function App() {
  return (
    <div className="container">
    <Header />
    <Weather />
    <Slider />
    <Answer />
    </div>
  );
}

export default App;
