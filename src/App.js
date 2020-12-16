import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Post from './components/Form/Post';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Post/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
