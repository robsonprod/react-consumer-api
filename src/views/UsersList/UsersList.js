import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { axios } from 'axios';

import { UsersToolbar, UserCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

axios.get("https://api.github.com/users")
.then(response => {
  console.log(response.data);
}).catch(erro => {
  console.log(erro);
});

const UsersList = () => {
  const classes = useStyles();

  
  const [users] = useState([]);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {users.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <UserCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UsersList;
