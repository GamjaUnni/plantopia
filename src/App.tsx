import { Routes, Route } from "react-router-dom";
import Layout from "@components/atoms/Layout/Layout";
import HomePage from "@components/pages/HomePage/HomePage";
import CalendarPage from "@components/pages/CalendarPage/CalendarPage";
import LoginPage from "@components/pages/LoginPage/LoginPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/calendar" element={<CalendarPage />} />
            </Route>
        </Routes>
    );
}

export default App;
