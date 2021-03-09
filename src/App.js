import './App.css';
import Cards from './Components/Cards';
import ChartCurrentData from './Components/ChartCurrentData';
import ChartEvolutionScore from './Components/ChartEvolutionScore';
import Header from './Components/Header';
import ListEnregistrement from './Components/ListEnregistrement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Cards />
        <ChartCurrentData/>
        <ChartEvolutionScore/>
        <ListEnregistrement />
      </div>
    </div>
  );
}

export default App;
