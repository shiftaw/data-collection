import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from './screens/Register'
import Sidebar from './containers/Sidebar'
import DataAndReports from './screens/DataAndReport'

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
        }}
      >
        <div style={{ width: '260px' }}>
          <Sidebar />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            paddingTop: 24,
          }}
        >
          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/about'>
              <div>about</div>
            </Route>
            <Route exact path='/reports'>
              <DataAndReports />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
