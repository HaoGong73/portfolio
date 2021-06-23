import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutme: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '20px',
  },
  article: {
    fontSize: '1.5rem',
    width: '60vw',
    lineHeight: '50px',
    marginLeft: '100px',
  },
  images: {
    height: '80vh',
  }

}));

const AboutMe = () => {
  const classes = useStyles();

  return (

    <>
      <CssBaseline />
      <Container fixed maxWidth="sm" className={classes.aboutme}>
        <img className={classes.images} src="./images/glacier-2019-02.jpg" alt={"ice land"} />
        <div className={classes.article}>
          <h3>About me</h3>
          <p>
            My name is Hao Gong and I am from China.
          </p>
          <p>
            When I was in university I studied in the computer science department. After graduated from university,  I have worked as a software developer for more than  20 years.
            I have always been passionate about learning something interesting and I like to travel all over the world.
          </p>
          <p>
            There are three people in my family, my wife, my son, and me.  I hope they could come to Canada soon.
          </p>
        </div>
      </Container>
    </>

  );
}

export default AboutMe;
