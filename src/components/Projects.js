import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/Zankoo.PNG";
import project2 from "../images/NoteZipper.PNG";
import project3 from "../images/Insta clone.PNG";
import project4 from "../images/Capture2.PNG";
import project5 from "../images/Pizza.PNG";
import project6 from "../images/makeup.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "50%",
  },
  cardContainer: {
    maxWidth: 340,
    
    margin: "5rem auto",
  },
});
const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid items xs={12} sm={7} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Ecommerce-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ecommerce is created with MERN.This app is used for Online
                  shopping for Men wear, we can add the product through cart and
                  proceed to buy.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://github.com/vinu94-s/Ecommerce">
                <Button size="small" colors="primary">
                  Source Code
                </Button>
              </a>
              <a href="https://warm-forest-12403.herokuapp.com/">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  CRUD Operation-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 This app is used to create the user notes,edit and delete the user note.
                 Then user edit and update their profile.It is Responsive design and
                 Real-time Api call with backend.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <a href="https://github.com/vinu94-s/CRUD-MERN">
              <Button size="small" colors="primary">
                Source Code
              </Button>
              </a>
              <a href="https://notezipper.herokuapp.com/">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Instagram-Clone MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Insta-clone is social-media clone.The user can share their thoughts and post their pictures
                and update their profile .The post can seen by others ,they can like and comment the post.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <a href="https://github.com/vinu94-s/insta-clone">
              <Button size="small" colors="primary">
                Source Code
              </Button>
              </a>
              <a href ="https://insta-alsq.herokuapp.com/">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Food App-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is food delivery app created with MERN,user can search the restaurants select their food and place the order.
                  It is responsive design.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <a href="https://github.com/vinu94-s/Food-app">
              <Button size="small" colors="primary">
                Source Code
              </Button>
              </a>
              <a href="https://foodtime-app.herokuapp.com/">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="140"
                image={project5}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Pizza-App React 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This Pizza-app is created with React and styled component Bootstrap.
                  This is fully responsive webpage that can use pizza data API for pulling pizza
                  and displayed on menu page.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <a href="https://github.com/vinu94-s/Pizza-app">
              <Button size="small" colors="primary">
                Source Code
              </Button>
              </a>
              <a href="https://pizza-app-19bb3.web.app">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 6"
                height="140"
                image={project6}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  MakeUp API-HTML CSS JS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 This website app is created when i was learning how to use CSS libraries and HTML,JS.
                 This is fully responsive website design,
               the website has been coded by hand no theme used
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <a href="https://github.com/vinu94-s/Makeup">
              <Button size="small" colors="primary">
                Source Code
              </Button>
              </a>
              <a href="https://wonderful-ride-d679be.netlify.app">
              <Button size="small" colors="primary">
                Live Demo
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
