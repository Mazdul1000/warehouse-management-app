import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import MyItems from './pages/MyItems/MyItems';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import SingleItem from './pages/SingleItem/SingleItem';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
       <Route path='/inventory/:itemId' element={
         <RequireAuth>
           <SingleItem></SingleItem>
         </RequireAuth>
       }></Route>
       <Route path='/myItems' element={<MyItems></MyItems>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
   
    </div> 
  );
}

export default App;
