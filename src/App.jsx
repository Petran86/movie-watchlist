import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyWatchlist from "./pages/MyWatchlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mywatchlist" element={<MyWatchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
