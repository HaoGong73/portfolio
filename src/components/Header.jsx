import { React, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

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
  avatar: {
    margin: theme.spacing(3),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headAppBar}>
        <AppBar position="static">
          <Toolbar>

            <Avatar className={classes.avatar} alt="Hao Gong" src="./images/headpic-01.png" />
            <Typography variant="h6" className={classes.title}></Typography>
            <Button component={Link} to="/" variant="contained" color="primary" disableElevation>home</Button>
            <Button component={Link} to="/about-me" size="large" variant="contained" color="primary" disableElevation>about me</Button>
            <Button component={Link} to="/blog-page" size="large" variant="contained" color="primary" disableElevation>my blog</Button>
            <Button component={Link} to="/contact-me" size="large" variant="contained" color="primary" disableElevation>contact me</Button>
            <Button component={Link} to="/research" size="large" variant="contained" color="primary" disableElevation>research</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Header;
