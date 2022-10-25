import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styling/globalStyles/globalStyles";
import colors from "./assets/styling/theme/colors/colors";
import Login from "./containers/Login/Login";
import NavBar from "./containers/NavBar/NavBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <ThemeProvider theme={colors}>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
