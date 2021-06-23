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
}));

const ContactMe = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xl" className={classes.contactme}>
        <h3>Email Address</h3>
        <p>gonghao73@gmail.com</p>
      </Container>
    </>

  );
}

export default ContactMe;
