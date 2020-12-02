import React from 'react'
import { CategoriesList } from './features/CategoriesList/CategoriesList'
import { Header } from './features/Header/Header'
import { PostList } from './features/PostList/PostList'
import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'

function App() {
  return (
      <div className="App">
        <Paper>
        <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={2}> 
            </Grid>
            <Grid item xs={6} align="center">
              <PostList />
            </Grid>
            <Grid item xs={2} align="center">
              <CategoriesList />
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
        </Paper>
      </div>
    );
  }

export default App;
