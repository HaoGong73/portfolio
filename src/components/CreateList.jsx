import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    marginLeft: '40px',
    paddingTop: '10px',
  }
}));

const CreateList = ({ lists }) => {
  const classes = useStyles();

  return (
    <>
      {
        lists.map((list, index) => {
          return <li key={index} className={classes.list}>{list.list}</li>
        })
      }
    </>
  )
}

export default CreateList;