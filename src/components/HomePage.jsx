import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headAppBar: {
    flexGrow: 1,
  },
  homepage: {
    // marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '20px',
  },
  words: {
    fontSize: '1.5rem',
    lineHeight: '100px',
    width: '55vw',
    marginRight: '50px',
  },
  images: {
    height: '80vh',
    // width: '35vw',
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
        <img className={classes.images} src="./images/glacier-2019-01.jpg" alt={"ice land"} />
      </Container>
    </>
  );
}

export default HomePage;
