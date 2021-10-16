import { Switch, Route } from 'react-router'
import Home from './Home'
import NotFound from './NotFound'
import Search from './Search'

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  )
} 

export default PageRoutes