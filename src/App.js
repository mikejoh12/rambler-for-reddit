import React from 'react'
import { Header } from './app/Header'
import { CategoriesList } from './features/categories/CategoriesList'
import { DiscussionList } from './features/posts/DiscussionList'
import { SearchList } from './features/search/SearchList'
import { PostList } from './features/posts/PostList'
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
            <Grid item xs={false} md={3}> 
            </Grid>
            
            <Grid item xs={7} md={4} align="center">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/r/pics" />
                </Route>
                <Route path="/r/:subreddit" children={<PostList />} />
                <Route path="/discussion/:subreddit/:id" children={<DiscussionList />} />
                <Route path="/search/:searchTerm" children={<SearchList />} />
              </Switch>
            </Grid>

            <Grid item xs={5} md={2} align="center">
              <CategoriesList />
            </Grid>
            
            <Grid item xs={false} md={3}>
            </Grid>
        </Grid>
        </Paper>
      </div>
    </Router>
    );
  }

export default App;
