import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "../SharedLayout";
import DevicesView from "components/views/DevicesView";

const Home = lazy(() => import("../../pages/Home"));
const Inventory = lazy(() => import("../../pages/Inventory"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/inventory" element={<Inventory />}>
                    <Route path="devices" element={<DevicesView />} />
                </Route>
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
