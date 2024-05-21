import { Typography, Box, styled, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = styled(Box)`
 padding:15px 24px ;
 background:#fff ;
 border-bottom:1px solid #f0f0f0 ;
`
const Heading = styled(Typography)`
 color:#878787 ;
`
const Container = styled(Box)`
 padding:15px 24px ;
 background:#fff ;
 & > p {
    margin-bottom:20px ;
    font-size:14px ;
 }
 & > h6 {
    margin-bottom:20px ;
 }
`
const Price = styled(Box)`
 float:right ;
`
const Discount = styled(Typography)`
 color:green ;
 font-weight:600;
`
const ButtonWrapper = styled(Box)`
 padding: 16px 22px ;
 background:#fff ;
 box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%) ;
 border-top: 1px solid #f0f0f0 ;
`
const StyledButton = styled(Button)`
 display:flex ;
 margin-left:auto;
 background:#fb641d;
 color:#fff ;
 width:250px ;
 height:51px ;
`
const TotalView = ({cartItems}) => {
    const[price, setPrice] = useState(0) ;
    const[discount, setDiscount] = useState(0)
    
    useEffect( () => {
        totalAmount() ;
    }, [cartItems])

    const totalAmount = () => {
        let price=0, discount= 0 ;
        cartItems.map( item => {
            price += item.price.mrp ;
            discount += (item.price.mrp - item.price.cost) ;
        }) ;
        setPrice(price) ;
        setDiscount(discount) ;
    }
    const checkoutHandler = async(amount) => {
      //http://localhost:8000/getkey
      const {data:{key}} = await axios.get("https://flipkart-clone-backened.onrender.com/getkey") ;

      const {data:{order}} = await axios.post("https://flipkart-clone-backened.onrender.com/checkout",{
        amount
      })

      var options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Akash Dubey",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://flipkart-clone-backened.onrender.com/paymentverification",
        prefill: {
            "name": "Akash Dubey", //name of loged in user
            "email": "gaurav.kumar@example.com", //user
            "contact": "9000090000"
        },
       notes: {
            "address": "Razorpay Corporate Office"
        },
       theme: {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
       
    
      
} 
    return (
       <Box>
         <Header>
            <Heading>PRICE DETAILS</Heading>
         </Header>
         <Container>
            <Typography> Price ({cartItems?.length} item)
              <Price component="span">₹{price}</Price>
            </Typography>
            <Typography> Discount ({cartItems?.length} item)
              <Price component="span">₹{discount}</Price>
            </Typography>
            <Typography> Delivery Charges({cartItems?.length} item)
              <Price component="span">40</Price>
            </Typography>
            <Typography variant="h6"> Total Amount ({cartItems?.length} item)
              <Price component="span">₹{ price - discount + 40 }</Price>
            </Typography>
            <Discount>You will save ₹{discount - 40} on this order</Discount>
            <ButtonWrapper>
              <StyledButton onClick={() => checkoutHandler(price - discount + 40)}>Place Order</StyledButton>
            </ButtonWrapper>
         </Container>
       </Box>
    )
}

export default TotalView ;