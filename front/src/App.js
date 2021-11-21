import {Routes, Route} from 'react-router-dom';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import AddIssue from './Components/AddIssue/AddIssue';
import UpdateIssue from './Components/UpdateIssue/UpdateIssue';
import ViewIssue from './Components/ViewIssue/ViewIssue';

import Home from './Pages/Home/Home';
import Archives from './Pages/Archives/Archives';



function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/archives' element={<Archives/>}/>
        <Route path='/add_issue' element={<AddIssue/>}/>
        <Route path='/update_issue/:id' element={<UpdateIssue/>}/>
        <Route path='/issues/:id' element={<ViewIssue/>}/>
      </Routes>
      <Footer/>    
    </div>
  );
}

export default App;
