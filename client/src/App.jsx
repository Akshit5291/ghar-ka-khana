// client/src/App.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApiStatus = async () => {
      try {
        // Note: We're using '/api' without the full URL thanks to our proxy configuration
        const response = await axios.get('/api/')
        setMessage(response.data.message)
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to connect to the server.')
        console.error('API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchApiStatus()
  }, [])

  return (
    <div className="app">
      <h1>Ghar ka Khana - Web Application</h1>
      <p>Welcome to your homemade food marketplace!</p>
      
      <div className="api-test">
        <h2>Backend Connection Test:</h2>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <div className="error-container">
            <p className="error">Error: {error}</p>
            <p className="note">
              Note: Ensure your backend server is running on port 5000.
            </p>
          </div>
        ) : (
          <p className="success">{message}</p>
        )}
      </div>
    </div>
  )
}

export default App