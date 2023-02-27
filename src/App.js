
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<ListBeers />}/>
        <Route path='/random-beer' element={<RandomBeer />}/>
        <Route path='/new-beer' element={<NewBeer />}/>
        <Route path='/beers/:id' element={<SingleBeer />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
