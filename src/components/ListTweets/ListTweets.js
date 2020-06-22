import React from 'react'
import { Grid } from '@material-ui/core';
import Tweet from '../Tweet';

import './ListTweets.scss';

const ListTweets = ({ allTweets, deleteTweet }) => {

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay tweets</h2>
      </div>
    )
  }

  return (

    <Grid
      container
      spacing={3}
      className="list-tweets"
    >
      {allTweets.map((tweet, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          lg={4}
        >
          <Tweet
            tweet={tweet}
            index={index}
            deleteTweet={deleteTweet}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ListTweets
