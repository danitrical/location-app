import './App.css';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { Main } from './pages/posts/main';

function App() {
  return <Router>
    <Route path={ '/' } exact>
      <Main />
    </Route>
    <Redirect to={ '/' }/>
  </Router>;
}

export default App;
