import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/') 
      .then(response => response.json())
      .then(json => setBlogs(json))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>My blogs</h1>
        {blogs && blogs.map(blog => (
          <h2 key={blog.id}>{blog.title}</h2>
        ))

        }
      </header>
    </div>
  );
}

export default App;
