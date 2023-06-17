import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Router/Main";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter; 