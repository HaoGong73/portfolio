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
  },
  title: {
    fontSize: '1.5rem',
    width: '60vw',
    lineHeight: '50px',
    marginLeft: '100px',
  },
  author: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '1rem',
  },
  cover: {
    height: '100px',
    width: '100px',
  }

}));

const BlogPage = () => {
  const classes = useStyles();
  const blogList = [
    {
      name: 'SSL',
      link: 'https://docs.google.com/document/d/1T3MHihZCg9_INyns_P6BDGtrIg71em9O2zvbMAXddbY/edit?usp=sharing',
      imgLink: './images/SSL-Certificate.png',
      date: '2021-05-10'
    },
    {
      name: 'Password Management Attachments',
      link: 'https://docs.google.com/document/d/1HfVGWiKjnRYdiE1fI51zDRaL7HgFN9jxnfQPIoW9-uk/edit?usp=sharing',
      imgLink: './images/password.png',
      date: '2021-05-10'
    },
    {
      name: 'HTML & CSS',
      link: 'https://docs.google.com/document/d/1l6c9GIBxzW9EPkhIkFEDv5K5zJg_3oE9xLUJ_ujvndo/edit?usp=sharing',
      imgLink: './images/htmlcss.jpg',
      date: '2021-05-10'
    },
    {
      name: 'Mohjiang Stradegy Guide',
      link: 'https://docs.google.com/document/d/1L-rZLXS3YpiY01zOsJEDDArzwMASnRji0vuG_GLnAsw/edit?usp=sharing',
      imgLink: './images/mahjong.png',
      date: '2021-05-10'
    },
    {
      name: 'One Assignment',
      link: 'https://docs.google.com/document/d/1gjHa3xXESqjjaYtgOs_2nivAYzkt-ElJrE_jkEmzLyY/edit?usp=sharing',
      imgLink: './images/snippet.png',
      date: '2021-05-10'
    },
  ];


  return (<>
    <CssBaseline />
    <Container fixed maxWidth="sm" className={classes.blogpage}>
      {
        blogList.map((blog, index) => {
          return <Card className={classes.blog} key={index}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {blog.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Hao Gong
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {blog.date}
                </Typography>
              </CardContent>
            </div>
            <a
              className="App-link"
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {<CardMedia
                className={classes.cover}
                image={blog.imgLink}
                title={blog.name}
              />}
            </a>

          </Card>
        })
      }
    </Container>
    {/* <div className="main">
      <div className="container  blog-page">
        <div className="blog">
          <a
            className="App-link"
            href="https://docs.google.com/document/d/1T3MHihZCg9_INyns_P6BDGtrIg71em9O2zvbMAXddbY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >{"SSL"}
          </a>
        </div>
        <div className="blog">
          <a
            className="App-link"
            href="https://docs.google.com/document/d/1HfVGWiKjnRYdiE1fI51zDRaL7HgFN9jxnfQPIoW9-uk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Password Management Attachments"}
          </a>
        </div>
        <div className="blog">
          <a
            className="App-link"
            href="https://docs.google.com/document/d/1l6c9GIBxzW9EPkhIkFEDv5K5zJg_3oE9xLUJ_ujvndo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"HTML & CSS"}
          </a>
        </div>
        <div className="blog">
          <a
            className="App-link"
            href="https://docs.google.com/document/d/1L-rZLXS3YpiY01zOsJEDDArzwMASnRji0vuG_GLnAsw/edit?usp=sharing

            "
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Mohjiang Stradegy Guide"}
          </a>
        </div>
        <div className="blog">
          <a
            className="App-link"
            href="https://docs.google.com/document/d/1gjHa3xXESqjjaYtgOs_2nivAYzkt-ElJrE_jkEmzLyY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"One Assignment"}
          </a>
        </div>

      </div>
    </div> */}

  </>);
}

export default BlogPage;
