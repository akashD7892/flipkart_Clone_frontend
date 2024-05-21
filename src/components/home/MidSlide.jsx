import { Box , styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
 display:flex ;

`
const LeftComponent = styled(Box) ( ({theme}) => ( {
  width:'83%' ,
  // when screen goes less than medium size - i.e 'md' then width 100% for responsiveness
  [theme.breakpoints.down('md')]: {
    width:'100%'
  }
}))


const RigthComponent = styled(Box) ( ({theme}) => ({
  background:'#ffffff' ,
  padding:'5px' ,
  marginTop: '10px' ,
  marginLeft:'10px' ,
  width:'17%' ,
  textAlign:'center' ,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));
 


const MidSlide = ( { products, title, timer }) => {
    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' ;
    
    return (
        <Component>
            <LeftComponent>
              <Slide 
              products={products} 
              title={title} 
              timer={true} 
              />
            </LeftComponent>

            <RigthComponent>
              <img src={addURL} alt="Advertisement" style={{width:217}}/>
            </RigthComponent>
            
        </Component>
    )
}

export default MidSlide ;