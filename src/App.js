import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import CharactersList from './Pages/CharactersList';
import Favorites from './Pages/Favorites';

const App = () => {
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route exact path="/" element={<CharactersList />} />
      <Route path="/:favorites" element={<Favorites />} />
    </Routes>
  </Router>;
};

export default App;
