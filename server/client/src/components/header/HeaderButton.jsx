import { useContext, useState } from "react";
import { Box,Button,makeStyles, Typography, Badge } from "@material-ui/core";
import { CenterFocusStrong, ContactSupportOutlined, Directions, FullscreenExit, NoEncryption, ShoppingCart, TramRounded } from '@material-ui/icons';
import { Link } from "react-router-dom";
//component
import Login from "../login/Login.jsx";
import { LoginContext } from "../../context/ContextProvider.jsx";
import  Profile from './Profile.jsx'
import {useSelector} from  'react-redux';
const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        // [theme.breakpoints.down('sm')]: {
        //     display: 'block'
        // }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));


const HeaderButton=()=>{
     
     const classes=useStyle();
     const [open,setOpen]=useState(false);
     const {cartItems}=useSelector(state=>state.cart);
     const {account, setAccount} = useContext(LoginContext);
      console.log(LoginContext);
     console.log(setAccount);
     console.log("hello");
     const openDialog = () => {
        setOpen(true);
    }
     return (
           <Box  className={classes.wrapper}>
           {   
           account?<Profile account={account} setAccount={setAccount} />:<Button variant="contained"  className={classes.login} onClick={()=> openDialog()}>Login</Button>
           }
           <Typography style={{marginTop:5}}>More</Typography>
            <Link to='/Cart' className={classes.container}>
            <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
           </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount}/>          
          </Box>
        
     )

}

export default HeaderButton;
