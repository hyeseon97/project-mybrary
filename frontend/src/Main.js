import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import App from "./App";
import BookPage from "./pages/BookPage";
import BookshelfPage from "./pages/BookshelfPage";
import FeedPage from "./pages/FeedPage";
import JoinPage from "./pages/JoinPage";
import MybraryPage from "./pages/MybraryPage";
import PaperplanePage from "./pages/PaperplanePage";
import RollingpaperPage from "./pages/RollingpaperPage";
import SearchPage from "./pages/SearchPage";
import SettingPage from "./pages/SettingPage";
import ThreadCreatePage from "./pages/ThreadCreatePage";
import ThreadsPage from "./pages/ThreadsPage";
import WelcomePage from "./pages/WelcomePage";

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WelcomePage />} />
          {/*이거 나중에 동적처리 :userid를 쓰는 이유는 오로지 구별용이다. url로 접근했을때 원하는 페이지로 가기 위함*/}
          <Route path="mybrary/userid">
            <Route index element={<MybraryPage />} />
            <Route path="threads" element={<ThreadsPage />} />
            <Route path="rollingpaper" element={<RollingpaperPage />} />
            <Route path="bookshelf">
              <Route index element={<BookshelfPage />} />
              {/*이거 나중에 동적처리 */}
              <Route path="categoryid" element={<BookPage />} />
            </Route>
          </Route>
          {/* 아래는 사람마다 보여지는 페이지가 같기 때문에 동적처리를 할 필요가 없다. */}
          <Route path="paperplane" element={<PaperplanePage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="threadCreate" element={<ThreadCreatePage />} />
          <Route path="account" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
