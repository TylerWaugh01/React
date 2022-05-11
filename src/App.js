import Footer from './components/Footer';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import { CAMPSITES } from './app/shared/CAMPSITES';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage campsites={ CAMPSITES }/>
      <Footer />
    </div>
  );
}

export default App;
