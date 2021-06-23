import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contactme: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontSize: '1.5rem',
  },
  card: {
    margin: '20px',
  }
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="md" className={classes.contactme}>
        <div className={classes.card}>
          <h3>Email Address</h3>
          <p>gonghao73@gmail.com</p>
        </div>
        <div className={classes.card}>
          <a href="https://www.facebook.com/hao.gong.169" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        </div>
        <div className={classes.card}>
          <a href="https://twitter.com/gonghao1973" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
        </div>
        <div className={classes.card}>
          <a href="https://www.instagram.com/hao.gong.169/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
        </div>
      </Container>
    </>

  );
}

export default ContactMe;
