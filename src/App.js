import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Router from './screens/router/Router';


function App() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}

export default App;