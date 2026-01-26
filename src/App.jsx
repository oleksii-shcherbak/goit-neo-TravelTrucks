import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/catalog" element={<div>Catalog Page</div>} />
            <Route path="/catalog/:id" element={<div>Camper Details Page</div>} />
            <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    );
}

export default App;