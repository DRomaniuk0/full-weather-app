import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Main from './pages/main/Main';
import List from './pages/List';
import NotFoundPage from './pages/NotFoundPage';
import Header from "./components/Header";

const App: React.FC = () => (
    <>
        <Header />
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/list" element={<List />} />
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
);

export default App;
