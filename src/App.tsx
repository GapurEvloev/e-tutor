import { classNames } from "./helpers/classNames/classNames";
import { useTheme } from "./theme/useTheme";
import { Theme } from "./theme/ThemeContext";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import React, { FC, Suspense } from "react";

const App: FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <>
      <div className={classNames(`app`, {}, [theme])}>
        <button onClick={toggleTheme}>toggle theme</button>
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