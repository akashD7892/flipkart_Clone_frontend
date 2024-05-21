
import { Grid, Box, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";

//component
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useState } from "react";

const Container = styled(Grid) (({theme}) => ({
    padding: '30px 135px' ,
    [theme.breakpoints.down('md')]: {
        padding:'15px 0'
    }
}))
 

const Header = styled(Box)`
  padding: 15px 24px ;
  background:white;
`

const LeftComponent = styled(Grid) (({theme}) => ({
    paddingRight:15 ,

    [theme.breakpoints.down('sm')]: {
        marginBottom:15
    }
}))
 


const Cart = () => {
    const { cartItems } = useSelector( state => state.cart ) ;

    return (
        <>
          {
            cartItems.length ?
            <Container container>
              <LeftComponent item lg={9} md={9} sm={9} xs={12}>
                <Header>
                    <Typography>My Cart ({cartItems.length})</Typography>
                </Header> 
                {
                    cartItems.map( item => (
                      
                      <>
                        <CartItem item={item} />
                      </>
                    ))
                }
               
              </LeftComponent>
              <Grid item lg={3} md={3} sm={3} xs={12}>
                   <TotalView cartItems={cartItems}/>
              </Grid>
            </Container>
            : <EmptyCart/>
          }
        </>
    )
}

export default Cart ;