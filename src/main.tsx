import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./assets/styles/common.scss";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
    // </React.StrictMode>
);
