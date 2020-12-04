import React from 'react'
import { Header } from './features/Header/Header'
import { CategoriesList } from './features/CategoriesList/CategoriesList'
import { DiscussionList } from './features/DiscussionList/DiscussionList'
import { SearchList } from './features/SearchList/SearchList'
import { PostList } from './features/PostList/PostList'
import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Paper>
        <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={2}> 
            </Grid>
            
            <Grid item xs={6} align="center">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/r/popular" />
                </Route>
                <Route path="/r/:subreddit" children={<PostList />} />
                <Route path="/discussion/:subreddit/:id" children={<DiscussionList />} />
                <Route path="/search/:searchTerm" children={<SearchList />} />
              </Switch>
            </Grid>

            <Grid item xs={2} align="center">
              <CategoriesList />
            </Grid>
            
            <Grid item xs={2}>
            </Grid>
        </Grid>
        </Paper>
      </div>
    </Router>
    );
  }

export default App;
