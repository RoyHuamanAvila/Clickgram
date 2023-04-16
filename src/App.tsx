import './App.scss'
import { Post } from './Components'
import { Posts } from './Data/Posts'

function App() {
  const posts = Posts;

  return (
    <div className="App">
      {
        posts.map((post, index) => <Post key={index} {...post} />)
      }
    </div>
  )
}

export default App
