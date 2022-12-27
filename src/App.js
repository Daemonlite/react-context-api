import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from './components/Home';
import CartPage from './components/Cart';

function App() {
  return (
   <BrowserRouter>
  <Header/>
  <div className='app'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<CartPage/>}/>
</Routes>
  </div>
   </BrowserRouter>
  );
}

export default App;
