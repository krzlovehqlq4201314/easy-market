// src/App.js
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <AppRouter />
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;
