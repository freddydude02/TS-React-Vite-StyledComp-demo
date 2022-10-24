import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styling/colours/theme";
import Login from "./containers/Login/Login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
