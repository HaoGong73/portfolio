import { Link } from 'react-router-dom';
import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  blogpage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    padding: '20px',
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
  const blogList = [
    {
      id: 1,
      name: 'About SSL',
      link: './blogs/blog1-About-SSL.pdf',
      imgLink: './images/SSL-Certificate.png',
      description: 'Intruduce SSL',
      date: '2021-05-16'
    },
    {
      id: 2,
      name: 'Password Management Attachments',
      link: './blogs/blog2-Password-Management.pdf',
      imgLink: './images/password.png',
      description: 'Intruduce how to make your passords safe',
      date: '2021-05-24'
    },
    {
      id: 3,
      name: 'HTML & CSS',
      link: './blogs/blog3-HTML-CSS.pdf',
      imgLink: './images/htmlcss.jpg',
      description: 'Intruduce what are HTML & CSS',
      date: '2021-05-30'
    },
    {
      id: 4,
      name: 'Mohjiang Stradegy Guide',
      link: './blogs/blog4-Strategy-guides-for-Mahjong.pdf',
      imgLink: './images/mahjong.png',
      description: 'This is a markdown language practice assignment',
      date: '2021-06-06'
    },
    {
      id: 5,
      name: 'One Assignment',
      link: './blogs/blog5-Code-Snippets-and-Diagrams.pdf',
      imgLink: './images/snippet.png',
      description: 'This is an assignment of REACT js',
      date: '2021-06-13'
    },
  ];
  const [styles, setStyles] = useState();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setStyles(JSON.parse(localStorage.getItem('styles')));
    setBlogs(JSON.parse(localStorage.getItem('blogs')));
  }, []);

  return (<>
    <CssBaseline />{console.log(blogs)}
    <Container fixed maxWidth="md" className={classes.blogpage}>
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
