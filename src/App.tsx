import { Routes, Route } from "react-router-dom";
import Layout from "@components/atoms/Layout/Layout";
import HomePage from "@components/pages/HomePage/HomePage";
import CalendarPage from "@components/pages/CalendarPage/CalendarPage";
import LoginPage from "@components/pages/LoginPage/LoginPage";
import MyPage from "@components/pages/MyPage/MyPage";
import MyInfoPage from "@components/pages/MyPage/MyInfoPage";
import DictPage from "@components/pages/DictPage/DictPage";
import DictSearchPage from "@components/pages/DictPage/DictSearchPage";
import DictDetailPage from "@components/pages/DictPage/DictDetailPage";
import DiaryPage from "@components/pages/DiaryPage/DiaryPage";
import JoinPage from "@components/pages/JoinPage/JoinPage";
import JoinComplete from "@components/pages/JoinPage/JoinComplete";
import DiaryDetailPage from "@components/pages/DiaryPage/DiaryDetailPage";
import DiaryWritePage from "@components/pages/DiaryPage/DiaryWritePage";
import PlantPage from "@components/pages/PlantPage/PlantPage";
import PlantDetailPage from "@components/pages/PlantPage/PlantDetailPage";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/join/complete" element={<JoinComplete />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/dictionary" element={<DictPage />} />
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="/myplant" element={<PlantPage />} />
            </Route>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/mypage/info" element={<MyInfoPage />} />
            <Route path="/dictionary/search" element={<DictSearchPage />} />
            <Route path="/dictionary/detail" element={<DictDetailPage />} />
            <Route path="/diary/detail" element={<DiaryDetailPage />} />
            <Route path="/diary/write" element={<DiaryWritePage />} />
            <Route path="/myplant/detail" element={<PlantDetailPage />} />
        </Routes>
    );
}

export default App;
