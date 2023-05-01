import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "../SharedLayout";


const Home = lazy(() => import("../../pages/Home"));
const Inventory = lazy(() => import("../../pages/Inventory"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
            </Route>
        </Routes>
    );
}

export default App;
