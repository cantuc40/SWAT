import {Routes, Route} from 'react-router-dom';

import NavigationBar from './components/navigationbar'
import Footer from './components/footer';
import AddIssue from './pages/addIssue';
import UpdateIssue from './pages/updateIssue';
import DeleteIssue from './pages/deleteIssue';

import Home from './pages/home';
import Archives from './pages/archives';



function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/archives' element={<Archives/>}/>
        <Route path='/add_issue' element={<AddIssue/>}/>
        <Route path='/update_issue' element={<UpdateIssue/>}/>
        <Route path='/delete_issue' element={<DeleteIssue/>}/>
      </Routes>
      <Footer/>    
    </div>
  );
}

export default App;