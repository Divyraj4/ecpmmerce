import { useState, useEffect  } from "react";
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from "@material-ui/core";
import { AccountBoxSharp, CenterFocusStrong, Repeat } from "@material-ui/icons";
import { authenticateSignup,authenticateLogin } from "../../service/api";

const usestyle=makeStyles(
{
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },

        
    
})
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};
const loginInitialValues = {
    username: '',
    password: ''
};
const Login=({open,setOpen,setAccount})=>{
    const classes=usestyle(); 
    const [account,toggleAccount]=useState(accountInitialValues.login);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    useEffect(() => {
        showError(false);
    }, [login])
   const handleClose=()=>
    {
            setOpen(false);
            toggleAccount(accountInitialValues.login);
    }
    const toggleUserAccount=()=>{
 
              toggleAccount(accountInitialValues.signup);

    }
   
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
        console.log(setAccount);
        
    }   
    return(
      <Dialog open={open} onClose={handleClose}>
         <DialogContent  className={classes.component}>
             <Box style={{display:'flex'}}>
               <Box  className={classes.image}>
                    <Typography varient="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:'25px'}}>{account.subHeading}</Typography>
               </Box>
               {            
                   account.view==='login'?
                <Box className={classes.login}>
                <TextField onChange={(e) => onValueChange(e)} name='username' label='Email and UserName/Mobile Number'/>
                <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>
                <Typography className={classes.text}>By Continuing You Agree to terms and Conditions of FlipCart</Typography>
                <Button onClick={()=>loginUser()} variant="contained" className={classes.loginBtn}>Login</Button>
                <Typography style={{textAlign:'center'}} className={classes.text}>OR</Typography>
                <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                <Typography onClick={()=>toggleUserAccount()}  className={classes.createText}>New To Flipcart?Create Account</Typography>
                </Box>:
                <Box className={classes.login}>
                <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter FirstName'/>
                <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter LastName'/>
                <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter UserName'/>
                <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email'/>
      
                <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>
                <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number'/>
               
                <Button  variant="contained" onClick={()=>signupUser()} className={classes.loginBtn}>SignUp</Button>
               
                </Box>
                   }  
               
             </Box>
         </DialogContent>

      </Dialog>

    )


}



export default Login;