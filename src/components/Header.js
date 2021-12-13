import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.jpeg";



const useStyles = makeStyles( theme => ({
    avatar:{
        width: theme.spacing(15),
        height : theme.spacing(15),
        margin :theme.spacing(1)
    },
    title: {
        color: "#09e5b5"
    },
    subtitle: {
        color: "#B7FFBF",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}));

const Header = () => {
   const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            
      
           <Grid container justify="center">
               
      
           <Avatar className={classes.avatar} src={avatar} alt="vinu"/>
           </Grid>
            
            <Typography className={classes.title} variant="h4">
             Vinu Rajeswari
             </Typography>
             
             <Typography className={classes.subtitle} variant="h5">
                 <Typed strings={["Web Design","Web Developer","MERN Stack"]} 
                 typeSpeed={40}
                 backSpeed={60}
                 loop />
             </Typography>
             <a
            href="https://drive.google.com/file/d/1xPIKZ3NlgUQ6sfrHnuml6uwauoWA7PyK/view?usp=sharing">
             <button className="topcontent_resume">Resume</button>
          </a>
        </Box>
    )
}

export default Header
