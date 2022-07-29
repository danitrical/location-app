import './App.css';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { Post } from './components/post/post';

function App() {
  return <Router>
    <Route path={ '/' } exact>
      <Post />
    </Route>
    <Redirect to={ '/' }/>
  </Router>;
}

export default App;
