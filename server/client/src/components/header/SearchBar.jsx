import { makeStyles ,Fade,InputBase,alpha} from "@material-ui/core";
import {FullscreenExit, Search} from '@material-ui/icons'
const usestyle=makeStyles((theme)=>({

    search: {
  
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display:'flex',
        color:'black',
        height:'40px'
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        color:'blue',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        fontSize:'unset',
        width:'100%',  
      },
      inputInput: {
        paddingLeft:20, 
        // vertical padding + font size from searchIcon
      
      },
}))
const SearchBar =()=>{
    const classes=usestyle();
    return(<div className={classes.search}>
        
        <InputBase
          placeholder="Search…For product, Brand and More"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          
        />
        <div className={classes.searchIcon}>
          <Search/>
        </div>
      </div>)
}

export default SearchBar;