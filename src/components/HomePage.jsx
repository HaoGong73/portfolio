import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homepage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '60px',
  },
  words: {
    fontSize: '1.1rem',
    lineHeight: '50px',
    width: '55vw',
    paddingRight: '100px',
    marginLeft: '50px',
  },
  images: {
    height: '80vh',
  }

}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="lg" className={classes.homepage}>
        <div className={classes.words}>
          <h3>Welcome to my portfolio</h3>
          <p>My name is Hao Gong. I am a MITT student now. So far I learnt HTML, CSS, Javascript, React js, and material-ui.</p>
          <p>This website is one page app, based on React js and deployed on Github. </p>
          <p>My portfolio includes home page, aboutme page, blog page, research page, and connect page.</p>
        </div>
        <img className={classes.images} src="./images/glacier-2019-01.jpg" alt={"ice land"} />
      </Container>
    </>
  );
}

export default HomePage;
