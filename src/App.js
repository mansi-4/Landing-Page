import './App.css';

import Index from './pages/index';
import About from './pages/about';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Services from './pages/services';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogSingle from './pages/blogsingle';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/blogsingle' element={<BlogSingle />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;