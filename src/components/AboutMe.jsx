import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutme: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '100px',
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
      <Container fixed maxWidth="lg" className={classes.aboutme}>
        <img className={classes.images} src="./images/glacier-2019-02.jpg" alt={"ice land"} />
        <div className={classes.article}>
          <h3>About me</h3>
          <p>
            My name is Hao Gong, and I am from Changchun, China.
          </p>
          <p>
            When I was in university I studied in the computer science department. After graduated from university in 1996,  I have worked as a software developer for more than  20 years. I have participated in more than 20 software projects and most of them were for the banks.
          </p>
          <p>
            Last year, I decided to make some changes in my life, and I also can provide a chance to my son to study in Canada. So, I came over to Canada and join MITT.

          </p>
          <p>
            I like to travel all over the world. So far, I have been to the USA, Maldives, Singapore, and Canada.

          </p>
          <p>
            There are three people in my family, my wife, my son, and me.  They cannot come to Canada now because of the pandemic. I hope they could come to Canada soon.

          </p>
        </div>
      </Container>
    </>

  );
}

export default AboutMe;
