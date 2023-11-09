import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>hello h1</h1>,
        children: [
            {
                path: '/'
            }
        ]
    }
])


export default router;