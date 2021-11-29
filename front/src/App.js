import {Routes, Route} from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import AddIssue from './Pages/AddIssue';
import UpdateIssue from './Pages/UpdateIssue';
import DeleteIssue from './Pages/DeleteIssue';

import Home from './Pages/Home';
import Archives from './Pages/Archives';



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
