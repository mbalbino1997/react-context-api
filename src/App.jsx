import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import AboutUs from './pages/aboutus/AboutUs.jsx'
import PostsPage from './pages/postspage/PostsPage.jsx'
import DefaultLayout from './layout/DefaultLayout.jsx'
import ShowPost from './pages/show.post/ShowPost.jsx'
import './App.css'
import { useState } from 'react'
import PostsListContext from './contexts/PostsListContext.jsx'
export default function App() {
  const [postsArray, setPostsArray] = useState([]);
  function fetchData() {
    axios
      .get(`${BASE_URI}/posts/${id}`)
      .then((res) => {
        console.log(res.data)
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        setPost(null);
      });
  }

  return (
    <PostsListContext.Provider value={{ postsArray, setPostsArray }}>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path="/blog">
              <Route index element={<PostsPage />} />
              <Route path=":id" element={<ShowPost />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter >
    </PostsListContext.Provider>
  )
}
