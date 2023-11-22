import { createBrowserRouter } from "react-router-dom";
import TranscriptPage from "./pages/TranscriptPage";
import App from "./App";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {

    path: "/transcript",
    element: <TranscriptPage />
}]);