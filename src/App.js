//components
import DetailView from './components/details/DetailView';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart' ;

import DataProvider from './context/DataProvider';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route} from 'react-router-dom' ;
import PaymentSuccess from './PaymentSuccess';
import ViewAll from './components/details/ViewAll';

function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
    
      <Header />
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/product/:id' element = { <DetailView/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
          <Route path='/viewall' element={<ViewAll/>} />
        </Routes>
      </Box>
     
     </BrowserRouter>
    </DataProvider>
  );
}

export default App;
