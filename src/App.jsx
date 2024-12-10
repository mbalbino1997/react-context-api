import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import AboutUs from './pages/aboutus/AboutUs.jsx'
import IndexPost from './pages/index.post/Index.post.jsx'
import DefaultLayout from './layout/DefaultLayout.jsx'
import ShowPost from './pages/show.post/ShowPost.jsx'
import './App.css'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/blog' element={<IndexPost />} />
        </Route>
        <Route path='/blog/:id' element={<ShowPost />} />
      </Routes>
    </BrowserRouter>
  )
}
