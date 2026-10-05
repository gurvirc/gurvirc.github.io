import { Routes, Route } from 'react-router-dom';
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import ProjectsPage from './Projects/ProjectsPage.jsx'
import Posts from "./Posts/PostsPage.jsx"
import Contact from './Contact.jsx';
import About from './About.jsx';
import Footer from './Footer/Footer.jsx';
import BlogPost from './Posts/BlogPost.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Body />
            <ProjectsPage />
            <Posts />
          </>
        }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="posts/:slug" element={<BlogPost />}></Route>
      </Routes>

      <Footer />

    </>
  )
}

export default App