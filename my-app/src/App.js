import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import CoursePage from './Pages/Courses/CoursePage'
import EventsPage from './Pages/Events/EventsPage'
import Layout from './Pages/Layout/Layout'
import MainPage from './Pages/Main/MainPage'

function App() {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='/coursepage' element={<CoursePage/>}/>
                <Route path='/eventspage' element={<EventsPage/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default App