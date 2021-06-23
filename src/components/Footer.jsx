import { React, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  headAppBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkToSocial: {
    margin: theme.spacing(3),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

}));


const Footer = () => {
  const classes = useStyles();

  return (
    <>
      {/* <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <Toolbar>
          <IconButton color="inherit">

            <a href="https://www.facebook.com/hao.gong.169" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/gonghao1973" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.instagram.com/hao.gong.169/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
          </IconButton>
        </Toolbar>
      </Container> */}
      {/* 
      <AppBar>
        <Toolbar style={{ margin: '0 auto', }}>
          <a href="https://www.facebook.com/hao.gong.169" target="_blank" rel="noopener noreferrer" className={classes.linkToSocial}><i className="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/gonghao1973" target="_blank" rel="noopener noreferrer" className={classes.linkToSocial}><i className="fab fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/hao.gong.169/" target="_blank" rel="noopener noreferrer" className={classes.linkToSocial}><i className="fab fa-instagram-square"></i></a>
        </Toolbar>
      </AppBar> */}
    </>

  );
}

export default Footer;

