import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
 border-top: 1px solid #f0f0f0 ;
 display:flex ;
 background:white;

`
const LeftComponent = styled(Box)`
 margin:20px ;
 display:flex ;
 flex-direction:column ;
`
const SmallText = styled(Typography)`
 color:#878787 ;
 font-size:14px ;
 margin-top:10px ;
`

const Remove = styled(Button)`
 margin-top:20px ;
 font-size:16px ;
 color:#000;
 font-weight:600 ;
`
// const ButtonWrapper = styled(Box)`
//  padding: 16px 22px ;
//  background:#fff ;
//  box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%) ;
//  border-top: 1px solid #f0f0f0 ;
// `
// const StyledButton = styled(Button)`
//  display:flex ;
//  margin-left:auto;
//  background:#fb641d;
//  color:#fff ;
//  width:250px ;
//  height:51px ;
// `

const CartItem = (props) => {
    
    const {item} = props ;
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' ;
    
    const dispatch = useDispatch() ;

    
    const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id)) ;
    }
    return (
        <Component>
            <LeftComponent>
              <img src={item.url} alt="product" style={{ height:110, width:110 }} />
              <ButtonGroup/>
            </LeftComponent>
            <Box style={{margin:'20px'}}>
              <Typography>{addEllipsis(item.title.longTitle)}</Typography>
              <SmallText>Seller:RetailNet
                <Box component="span"><img src={fassured} alt="fassured" style={{ width:50, marginLeft:10}}/></Box>
              </SmallText>
              <Typography style={{ margin:'20px 0'}}>
              <Box component="span" style={{ fontWeight:600, fontSize:18 }}>₹{item.price.cost}</Box>&nbsp; &nbsp; &nbsp;
              <Box component="span" style={{color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp; &nbsp; &nbsp;
              <Box component="span" style={{color: '#388E3C'}}>{item.price.discount}off</Box>
            </Typography>

            <Remove onClick={() => removeItemFromCart(item.id)} >Remove</Remove>
            
              
            </Box> 
      
        </Component>
    )
}

export default CartItem ;