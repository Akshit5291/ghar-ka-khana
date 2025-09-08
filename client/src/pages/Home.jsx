import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="home-container">
      <h1>Welcome to Ghar ka Khana</h1>
      {isAuthenticated ? (
        <div>
          <h2>Hello, {user.name}!</h2>
          <p>You are successfully logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Discover homemade meals near you</h2>
          <p>Please login or register to continue.</p>
        </div>
      )}
    </div>
  )
}

export default Home