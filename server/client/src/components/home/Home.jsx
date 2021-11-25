import {Box,makeStyles} from '@material-ui/core'

import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'
import MidSection from './MidSection'
import { useSelector,useDispatch } from 'react-redux'
import {getProducts as listProducts} from '../../redux/action/productAction'
import React,  { useEffect } from 'react';
// import {products} from '../../constant/data'
const useStyle=makeStyles({
   component:{
         padding:10,
         background:'#F2F2F2'
         
         },
     rightWrapper:{
          background:'#ffffff',
          padding:5,
          margin:'12px 0 0 10px',
          width:'17%'

     }    

})



const Home=()=>{
     const classes=useStyle();
     const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
     const getProducts=useSelector(state=>state.getProducts);
     const { products, error } = getProducts;
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(listProducts())
      }, [dispatch])
  
     return(
          <>
          <NavBar/>
          <Box className={classes.component}>
          <Banner/>
          <Box style={{display:'flex'}}>
          <Box style={{width:'83%'}}>
               <Slide timer={true} title='Deal of the Day'
               products={products}
               />
          </Box>
          <Box className={classes.rightWrapper}>
          <img src={adURL} style={{width:230}}/>
          </Box>
          </Box>
          <MidSection/>
          <Slide timer={false} title='Your Discount' products={products} />
          <Slide timer={false} title='Your Discount' products={products}/>
          <Slide timer={false} title='Your Discount'  products={products}/>
          </Box>
         
          
          
          </>
     );

}

export default Home;