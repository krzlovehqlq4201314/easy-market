// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home       from '../pages/Home';
import Login      from '../pages/Login';
import Register   from '../pages/Register';
import ItemList   from '../pages/ItemList';
import ItemDetail from '../pages/ItemDetail';
import Chat       from '../pages/Chat';
import Profile    from '../pages/Profile';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/"            element={<Home />} />
          <Route path="/items"       element={<ItemList />} />
          <Route path="/items/:id"   element={<ItemDetail />} />
          <Route path="/chat/:roomId" element={<Chat />} />
          <Route path="/profile"     element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
