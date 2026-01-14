import {Suspense} from "react";
import {RouterProvider} from "react-router";
import {router} from "./router";
import LoadingFallback from "./components/LoadingFallback.tsx";
import {Provider} from "react-redux";
import {store} from "./store";
import './styles/App.css';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<LoadingFallback/>}>
                <RouterProvider router={router}/>
            </Suspense>
        </Provider>
    )
}

export default App;
