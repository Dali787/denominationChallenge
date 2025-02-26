import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import DenominationPage from "./pages/DenominationPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/denominations" element={<DenominationPage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
