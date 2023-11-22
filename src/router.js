import { createBrowserRouter } from "react-router-dom";
import TranscriptPage from "./pages/TranscriptPage";
import App from "./App";
import EventDetail from "./pages/EventDetail";
import SubmissionPage from "./pages/SubmissionPage";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {

        path: "/transcript",
        element: <TranscriptPage />
    },
    {
        path: "/eventdetail",
        element:< EventDetail />
    },
    {
        path: "/submissionPage",
        element:< SubmissionPage/>
    }

]);