import { Link, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import BlogPostPara from './BlogPostPara';
import CardMedia from '@material-ui/core/CardMedia';
import { AcUnitRounded, CancelScheduleSendSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  bolgpost: {
    // marginRight: theme.spacing(2),
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'start',
    // alignItems: 'center',
    // padding: '60px',
  },
  title: {
    fontSize: '1.5rem',
    marginTop: '4rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  author: {
    textAlign: 'center',
    fontSize: '1rem',
  },
  date: {
    textAlign: 'center',
    fontSize: '1rem',
  },
  subtitle: {
    fontSize: '1rem',
  },
  images: {
    height: '80vh',
    // width: '35vw',
  },
  cite: {
    fontSize: '1rem',
    marginTop: '4rem',
  },
  citeLink: {
    fontSize: '1rem',
    display: 'block',
  }

}));

const BlogPostPage = () => {
  const classes = useStyles();
  const { blogId } = useParams();

  const [styles, setStyles] = useState();
  const [blog, setBlog] = useState({});
  const [body, setBody] = useState([]);
  const [cite, setCite] = useState([]);

  console.log('blog-ID', blogId);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem('blogs'));
    const oneBlog = blogs.filter(blog => blog.id === blogId);
    setBlog(oneBlog[0]);
    setBody(oneBlog[0].body);
    setCite(oneBlog[0].cite);

    setStyles(JSON.parse(localStorage.getItem('styles'))[0]);
  }, [])

  return (<>
    <CssBaseline />
    <Container fixed maxWidth="sm" className={classes.bolgpost}>

      { // console.log(blog)
        // <BlogHeader title={blog.title} author={blog.author} date={blog.post_date} description={blog.description} />
        // <BlogBody body={blog.body}/>
      }
      <Typography component="h3" variant="h3" className={classes.title}>
        {blog.title ?? ''}
      </Typography>
      <Typography component="h5" variant="h5" className={classes.author}>
        {blog.author ?? ''}
      </Typography>
      <Typography component="h5" variant="h5" className={classes.date}>
        {blog.post_date ?? ''}
      </Typography>
      <h3 className={classes.date}>{blog.date ?? ''}</h3>
      {
        // console.log(body)
        body.map((item, index) => {
          return <BlogPostPara key={index} para={item} />
        })
      }
      <Typography component="h5" variant="h5" className={classes.cite}>
        {'Cite:'}
      </Typography>
      {
        cite.map((aCite, index) => {
          return <a key={index} href={aCite.link} className={classes.citeLink}>{index}.{aCite.link}</a>
        })
      }
    </Container>
  </>);
}

export default BlogPostPage;
