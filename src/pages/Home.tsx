import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/StyledComponents'

const Home = () => {
  return (
    <PageWrapper>
      <h1>Homepage</h1>
      <Link to="/search">Search</Link>
    </PageWrapper>
  )
} 

export default Home