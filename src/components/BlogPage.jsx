import { Link } from 'react-router-dom';
import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  blogpage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    paddingTop: '40px',
  },
  blog: {
    margin: '10px',
    width: '50vw',
    padding: '10px',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1rem',
    lineHeight: '40px',
  },
  author: {
    fontSize: '0.8rem',
  },
  date: {
    fontSize: '0.8rem',
    marginTop: '1.5rem',
  },
  cover: {
    height: '100px',
    width: '100px',
    marginRight: '15px',
    borderRadius: '10px',
  },
  blogLink: {
    textDecoration: 'none',
  },
  description: {
    textDecoration: 'none',
  },

}));

const BlogPage = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(JSON.parse(localStorage.getItem('blogs')));
  }, []);

  return (<>
    <CssBaseline />
    <Container fixed maxWidth="sm" className={classes.blogpage}>
      {
        blogs.map((blog) => {
          return <Card className={classes.blog} key={blog.id}>
            <Link
              className={classes.blogLink}
              to={`/blog-post-page/${blog.id}`}
            // target="_blank"
            // rel="noopener noreferrer"
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.title}>
                    {blog.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.author}>
                    Hao Gong
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.date}>
                    {blog.post_date}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.description}>
                    {blog.description}
                  </Typography>
                </CardContent>
              </div>
            </Link>
            <Link
              // className={classes.blogLink}
              // href={blog.link}
              to={`/blog-post-page/${blog.id}`}
            // target="_blank"
            // rel="noopener noreferrer"
            >
              {<CardMedia
                className={classes.cover}
                image={blog.poster_path}
                title={blog.title}
              />}
            </Link>

          </Card>
        })
      }
    </Container>

  </>);
}

export default BlogPage;
