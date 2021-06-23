// import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headAppBar: {
    flexGrow: 1,
  },
  homepage: {
    marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'start',
    alignContent: 'center',
    fontSize: '1.5rem',
  },
  words: {
    width: '45vw',
  },
  images: {
    width: '50vw',
  }

}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xl" className={classes.homepage}>
        <div className={classes.words}>
          <h3>Welcome to my portfolio</h3>
          <p>I am a MITT student now. So far I learnt HTML, CSS, Javascript, React.</p>
          <p>This website is based on React and deployed on Github. </p>
        </div>
        <img className="main-picture" src="./images/glacier-2019-01.jpg" alt={"ice land"} />
      </Container>
    </>
  );
}

export default HomePage;
