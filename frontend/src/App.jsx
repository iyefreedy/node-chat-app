import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Protected from "./pages/Protected";

const App = () => {
    return (
        <Routes>
            {" "}
            {/* Ganti RouterProvider dengan Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Protected />}>
                <Route path="/chat" element={<Chat />} />
            </Route>
        </Routes>
    );
};

export default App;
