import { useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../services/api'

import { DataContext } from '../context/DataProvider'


const Components = styled(Box)`
height:70vh ;
width: 90vh ;

`
const Image = styled(Box)`
 background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
 height:81%;
 width:28%;
 padding: 45px 35px;
 & > p , & >h5 {
  color:#FFFFFF;
  font-weight:600;
 }
 
`
const Wrapper = styled(Box)`
display:flex ;
flex-direction:column ;
padding:20px 30px ;
flex:1;
& > div , & > button,  & > p{
    margin-top:18px;
}
`
const LoginButton = styled(Button)`
text-transform:none ;
background: #FB641B ;
color:#FFF ;
height:48px;
border-radius: 3px ;
`
const RequestOTP = styled(Button)`
text-transform:none ;
background: #fff ;
color:#2874f0 ;
height:48px;
border-radius: 3px ; 
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text = styled(Typography)`
 font-size:12px ;
 color:#878787 ;
`
const CreateAccount = styled(Typography)`
font-size:14px ;
text-align:center;
color:#2874f0 ;
font-weight:600 ;
cursor:pointer ;
`
const accountInitialValues = {

  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },

  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: 'Sign up with your mobile number to get started'
  }

}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  usename: '',
  email: '',
  password: '',
  phone: ''
}

// for login 
const loginInitialValues = {
  username: '',
  password: ''
}

export default function LoginDialog({ open, setOpen }) {

  const [account, toggleAccount] = useState(accountInitialValues.login) ;
  const [signup, setSignup] = useState(signupInitialValues) ;
  const [login, setLogin] = useState(loginInitialValues) ;
  const [error, setError] = useState(false) ;

  const { setAccount } = useContext(DataContext);

  const handleclose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });

  }

  const signupUser = async () => {
    //to add the data to database
    let response = await authenticateSignup(signup);
    if (!response)
      return;

    handleclose();
    setAccount(signup.firstname);
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  // to work with axios
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response) {
      handleclose();
      console.log(response.username);
      setAccount(login.username);
    } else {
      setError(true) ;
    }
  }

  return (
    <Dialog open={open} onClose={handleclose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Components>
        <Box style={{ display: 'flex', height: '100%' }} >

          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>

          {account.view === 'login' ?
            <Wrapper>
              <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
              { error && <Typography>Enter valid username</Typography> }
              <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter password' />
              <Text>Agree flipkart terms and conditions</Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup(0)}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>

            :
            <Wrapper>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='First name' />
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='Last name' />
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Username' />
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Email' />
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Password' />
              <TextField varian t='standard' onChange={(e) => onInputChange(e)} name='phone' label='Phone no' />
              <LoginButton onClick={() => signupUser()}>Login</LoginButton>

            </Wrapper>

          }

        </Box>
      </Components>
    </Dialog>
  )
}
