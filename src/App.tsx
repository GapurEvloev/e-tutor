import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";

const App: FC = () => {
  return (
    <>
      <div className="app">
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync/>}/>
            <Route path="/about" element={<AboutPageAsync/>}/>
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App;