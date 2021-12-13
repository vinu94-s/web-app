import React,{ useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import{
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
}from "@material-ui/icons"
import avatar from "../avatar.jpeg";
import Footer from './Footer';




const useStyles = makeStyles(theme => ({
     menuSliderContainer: {
         width : 250,
         background :" #0088cc",
         height:"100%" 
     },
     avatar:{
       display:"block",
       margin:"0.5rem auto",
       width: theme.spacing(13),
       height: theme.spacing(13)
     },
     listItem: {
         color: "white"
     }
}));

const menuItems =[
    {
        listIcon:<Home/>,
        listText: "Home",
        listPath:"/"
    },
    {
        listIcon:<AssignmentInd/>,
        listText: "Skills",
        listPath:"/skills"
    },
    {
        listIcon:<Apps/>,
        listText: "Projects",
        listPath:"/project"
    },
    {
        listIcon:<ContactMail/>,
        listText: "Contacts",
        listPath:"/contact"
    }
]


const Navbar = () => {
 const [state, setstate] = useState({
     right:false
 });
 const toggleSlider =((slider, open) => () => {
     setstate({...state,[slider]: open });
 })
   const classes = useStyles();

   const sideList = slider => (
 
    <Box
    className={classes.menuSliderContainer} 
    component="div"
    onClick={toggleSlider(slider,false)}>
    <Avatar className={classes.avatar}  src={avatar} alt="vinu"/>
<Divider/>
<List>
    {menuItems.map((lsItem, key) => (
    <ListItem button key={key} component={Link} to={lsItem.listPath}>
    <ListItemIcon className={classes.listItem}>
    {lsItem.listIcon}
    </ListItemIcon>
     <ListItemText className={classes.listItem} primary={lsItem.listText}/> 
    </ListItem>

    ))}
 </List>
</Box>
   );
    return (
        <>
       
        <Box component="nav">
            <AppBar position="static" style={{ background:"#0088cc"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <ArrowBack style={{ color: "white"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{ color:"white"}}>Vinu</Typography>
               
                   <MobilRightMenuSlider 
                   anchor="right" 
                   open={state.right}
                  onClose={toggleSlider("right",false)} 
                  >
                   {sideList("right")}
                    <Footer/>
                  
                   </MobilRightMenuSlider> 
                </Toolbar>
            </AppBar>
        </Box>
        </>
    ) 
}

export default Navbar
