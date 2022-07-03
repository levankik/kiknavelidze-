import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
//import UserList from './users/Userlist';
import Layout from "./Layout";
import Website from "./Website";
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import UsersView from "./UsersView";
import GalleryView from "./gallery/GalleryView";
import TodoView from "./todo/TodoView";
//import FancyBorderView from "./FancyBorderView";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="" element={<Alert><h1>Welcome</h1></Alert>}/>
                    <Route path="first" element={<Outlet/>}>
                        <Route path="website" element={<Website/>}/>
                    </Route>
                    <Route path="website" element={<Website/>}/>
                    <Route path="users" element={<UsersView/>}/>
                    <Route path="gallery" element={<GalleryView/>}></Route>
                    <Route path="todo" element={<TodoView/>}/>
                    <Route path="*" element={<Alert variant="danger">page not found</Alert>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
