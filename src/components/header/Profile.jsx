import { Typography, Box, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingNewIcon from '@mui/icons-material/PowerSettingsNew'

const Component = styled(Menu)`
    margin-top: 5px ;
    
    `
const Logout = styled(Typography)`
 font-size:14px ;
 margin-left:10px;
`
export default function Profile( {account, setAccount} ) {
    
    const [open, setOpen] = useState(false) ;
    const handleClick = (event) => {
        setOpen(event.currentTarget) ;
    }

    const handleClose = () => {
        setOpen(false) ;
    } 
    
    const Logout1 = () => {
      setAccount('');
    }
    
    return (
    <>
    <Box onClick = {handleClick} >
        <Typography style={{marginTop:2, cursor:'pointer' }}>{account}</Typography>
    </Box> 
    <Component 
       
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
        <MenuItem onClick={ () => {handleClose(); Logout1(); }}>
          <PowerSettingNewIcon color='primary' fontSize='small'/>
          <Logout>Logout</Logout>
        </MenuItem>
       
      </Component >
    </>
  )
}
