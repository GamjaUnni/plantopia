import { Routes, Route } from "react-router-dom";
import Layout from "@components/atoms/Layout/Layout";
import HomePage from "@components/pages/HomePage/HomePage";
import CalendarPage from "@components/pages/CalendarPage/CalendarPage";
import LoginPage from "@components/pages/LoginPage/LoginPage";
import MyPage from "@components/pages/MyPage/MyPage";
import MyInfoPage from "@components/pages/MyPage/MyInfoPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/mypage" element={<MyPage />} />
            </Route>
            <Route path="/mypage/info" element={<MyInfoPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
    );
}

export default App;
