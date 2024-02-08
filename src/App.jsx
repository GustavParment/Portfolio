import './App.css'
import HomePage from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Header from './pages/Header.jsx';
import {Routes, Route} from 'react-router-dom'



function App() {
    return(
        <>
    <Header/>
        <div className='App'>
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/about' element={<AboutMe/>}/>
    <Route path='/port' element={<Portfolio/>}/>
    <Route path='/contact' element={<ContactMe/>}/>

</Routes>
    </div>
   
    </>
            
    )

}

export default App
