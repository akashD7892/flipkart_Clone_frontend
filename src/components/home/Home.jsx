import { useEffect } from 'react'
import { Box, styled } from '@mui/material'

// components
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide' ;
import MidSlide from './MidSlide';
import MidSection from './MidSection' ;

import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Component = styled(Box)`
padding: 10px 10px;
background:#f2f2f2;
`

export default function Home() {
  
  // its a custom hook of redux which contain a state
  // object destructuring
  // state.getProduct is the reducer present in state of redux store
  const {products}  = useSelector( state => state.getProducts ) ;

  const dispatch = useDispatch() ;

  useEffect ( () => {
   dispatch( getProducts() ) ;
  }, [dispatch]
  )
  

  //console.log( `${products} from Home` ) ;
  return (
    <>
    <Navbar/>

    <Component>
      <Banner/>
      
      <MidSlide products = {products} title="Deal of the Day" timer={true} />
      <MidSection/>
      <Slide products = {products} title="Discount for you" timer={false}/>
      <Slide products = {products} title="Suggesting Items" timer={false}/>
      <Slide products = {products} title="Top Selection" timer={false} />
      <Slide products = {products} title="Recommended Items" timer={false}/> 
      <Slide products = {products} title="Trending offers" timer={false}/>
      <Slide products = {products} title="Season' of top picks" timer={false}/>
      <Slide products = {products} title="Top Deals on Accessories" timer={false}/>

    </Component>
    
    </>
   
  )
}
