import { createBrowserRouter } from "react-router-dom";
import TranscriptPage from "./pages/TranscriptPage";
import App from "./App";
import EventDetail from "./pages/EventDetail";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {

        path: "/transcript",
        element: <TranscriptPage />
    },
    {
        path: "/eventdetail",
        element:< EventDetail />
    }

]);