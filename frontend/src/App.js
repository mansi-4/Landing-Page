import Home from './screens/HomeScreen';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Services from './screens/ServicesScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;