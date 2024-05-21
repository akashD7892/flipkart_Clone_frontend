import React from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom' 

import { Menu } from '@mui/material'

const StyledHeader = styled(AppBar)
` background:#2874f0;
  height:55px;
`
const Component = styled(Link)`
  margin-left:12%;
  line-height:0; //to decrease the height bt flip and expl 
  text-decoration:'none'
`
const SubHeading = styled(Typography)`
font-size: 10px ;
font-style:italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
})

const CustomButtonWrap = styled(Box)(({theme}) => ({
    margin:'0 5% 0 ',

    //shows error dont know why 
    // [theme.breakpoints.down('sm')]:{
    //     margin:0
    //   }
}));

const MenuButton = styled(IconButton) (({theme}) => ({
    display:'none',
    // [theme.breakpoints.down('md')]:{
    //     display:'none'
    // }
}))

export default function Header() {

    const logURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledHeader >
            <Toolbar style={{minHeight:55}}>
                <MenuButton color='inherit'>
                  <Menu/>
                </MenuButton>
                <Component to='/'>
                    <img src={logURL} alt='oops' style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component='span' style={{ color: 'yellow' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='oops' />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrap>
                    <CustomButtons/>
                </CustomButtonWrap>
            </Toolbar>
        </StyledHeader >
    )
}
