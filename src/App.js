import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import CharactersListContainer from './Pages/CharactersListContainer';
import FavoritesContainer from './Pages/FavoritesContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<CharactersListContainer />} />
      <Route path="/favorites" element={<FavoritesContainer />} />
    </Routes>
  </Router>
);

export default App;
