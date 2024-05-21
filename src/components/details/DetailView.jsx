import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid,styled } from "@mui/material";
// to fetch details from url as we need to use id from url 
import { useParams } from "react-router-dom";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
 background: #F2F2F2 ;
 margin-top: 55px ;
`
const Container = styled(Grid) (( {theme}) => ({
  background: '#FFFFFF',
  display:'flex' ,
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))


const RightContainer = styled(Grid)`
margin-top:50px ;
`
const DetailView = () => {
    
    const {id} = useParams() ;
    const dispatch = useDispatch() ;
    
    const { loading, product} = useSelector( state => state.getProductDetails ) ; 
    
    useEffect( ()=> { 

        if( product && id !== product.id )
         dispatch(getProductDetails(id)) ;

    },[dispatch, id, product, loading])
   
    return (
       <Component>
        {
            product  && Object.keys(product).length && 
            <Container container>
           
              <Grid item lg={4} md={4} xs={12}>
                <ActionItem product={product} />
              </Grid >
              <RightContainer item lg={8} md={8} xs={12}>
                <ProductDetail product={product} />
              </RightContainer>

            </Container>
            
        }
       </Component>

    )
}

export default DetailView ;