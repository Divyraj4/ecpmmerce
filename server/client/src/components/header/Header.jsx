
import {AppBar,Toolbar,makeStyles,Typography,Box,IconButton,Drawer,List,ListItem} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom';
//components
import SearchBar from '../header/SearchBar';
import HeaderButton from '../header/HeaderButton';
import { NoEncryption } from '@material-ui/icons';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
const usestyle=makeStyles(theme => ({
    header:{
        background: '#2874f0',
        height: 55
    },
    logo:
    {
        width:70
    },
    subURL:{
        width:12,
        
    },
    list: {
        width: 250
    },
    container:{
           display:'flex',
    },
    component:
    {
          marginLeft:'12%',
          lineHeight:0,
          textDecoration:'none',
          color:'#fff'
    },
    subheading:{
        fontSize:10,
        fontStyle:'italic'
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }

}));
const ToolBar=withStyles
({
    root: {
        minHeight: 55
    }
})(Toolbar);
const  Header=()=>{
     const classes=usestyle();
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
     const [open, setOpen] = useState(false);
     const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    {  <HeaderButton/>}
                </listItem>
            </List>
        </Box>
    );
     return( 

        <AppBar className={classes.header}>
          <ToolBar>
          <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
         >
                    <Menu />
         </IconButton>

         <Drawer open={open} onClose={handleClose}>
                    {list()} 
        </Drawer>
            <Link to='/' className={classes.component}>
           <img src={logoURL} className={classes.logo}></img>
           <Box className={classes.container}>
          <Typography className={classes.subheading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
          <img src={subURL} className={classes.subURL}></img>
          </Box>
           </Link>
          <SearchBar/>
          <span className={classes.customButtons}><HeaderButton/></span>
         </ToolBar>
       </AppBar>
      
    )
         
    
}
export default Header;