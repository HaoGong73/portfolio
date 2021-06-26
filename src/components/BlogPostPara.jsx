import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import CreateList from './CreateList';

const useStyles = makeStyles((theme) => ({
  bolgpost: {
    // marginRight: theme.spacing(2),
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'start',
    // alignItems: 'center',
    // padding: '60px',
  },

  paragraph: {
    fontSize: '1rem',
    marginTop: '2rem',
    lineHeight: '2rem'
  },
  subtitle: {
    fontSize: '1rem',
    marginTop: '2rem'
  },
  image: {
    marginTop: '2rem',
    width: '40vw',
  },
  image_dec: {
    // height: '80vh',
    fontSize: '0.7rem',
  }

}));

const BlogPostPara = ({ para }) => {
  const classes = useStyles();
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setKeys(Object.keys(para))
  }, [])

  return (<>

    {
      // let keys = Object.keys(para);
      keys.map((item, index) => {
        if (item === 'subtitle') {
          return (<h3 key={index} className={classes.subtitle}> {para.subtitle}</h3>)
        }
        if (item === 'paragraph') {
          return (<p key={index} className={classes.paragraph}>{para.paragraph}</p>)
        }
        if (item === 'image_link') {
          return (
            <img key={index} className={classes.image} src={para.image_link} alt={para.image_dec} />
          )
        }
        if (item === 'image_dec') {
          return (<p key={index} className={classes.image_dec}>{para.image_dec}</p>)
        }
        if (item === 'lists') {
          return (
            <ul key={index} className={classes.ul}>
              {
                <CreateList lists={para.lists} />
              }
            </ul>
          )
        }
        return (<></>)
      })
    }


  </>);
}

export default BlogPostPara;
