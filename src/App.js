import Footer from './components/Footer';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
