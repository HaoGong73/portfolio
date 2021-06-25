import { Link, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homepage: {
    // marginRight: theme.spacing(2),
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
    paddingRight: '50px',
    // paddingLeft: '150px',
    // marginRight: '50px',

  },
  images: {
    height: '80vh',
    // width: '35vw',
  }

}));

const BlogPostPage = () => {
  const classes = useStyles();
  const blogId = useParams();

  return (<>
    <CssBaseline />
    <Container fixed maxWidth="lg" className={classes.homepage}>
      <div className={classes.words}>
        <h3>Welcome to my portfolio</h3>
        <p>I am a MITT student now. So far I learnt HTML, CSS, Javascript, React, and material-ui.</p>
        <p>This website is based on React and deployed on Github. </p>
      </div>
      <img className={classes.images} src="./images/glacier-2019-01.jpg" alt={"ice land"} />
    </Container>
  </>);
}

export default BlogPostPage;
