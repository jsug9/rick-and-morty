import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Navbar from './Components/Navbar';
import CharactersListContainer from './Pages/CharactersListContainer';
import FavoritesContainer from './Pages/FavoritesContainer';
import CharacterDetailsContainer from './Pages/CharacterDetailsContainer';
import client from './API/ApolloClient';

const App = () => (
  <ApolloProvider client={client}>
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<CharactersListContainer />} />
        <Route path="/:character" element={<CharacterDetailsContainer />} />
        <Route path="/favorites" element={<FavoritesContainer />} />
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
