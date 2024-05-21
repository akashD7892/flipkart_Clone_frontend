import { imageURL } from "../../constants/data";
import { Box, Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
margin-top: 10px ;
justify-content: space-between ;

`
const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
})); 

const MidSection = () => {
    
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
       <Wrapper lg={12} sm={12}  md={12} xs={12} container>
        {
            imageURL.map( image => (
                <Grid lg={4} md={4} sm={12} xs={12} >
                  <img src={image} alt="image" style={{ width:'100%'}}/>
                </Grid>
            ))
        }
       </Wrapper>
       <Image src={url} alt="pic" />
       </>
    )
}

export default MidSection ;

//grid in MUI for responsive layout