import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductInfo from './pages/ProductInfo'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '/product', element: <ProductPage /> },
            { path: 'product/:productID', element: <ProductInfo /> }
        ]
    }
]);

function App() {
    return <RouterProvider router={ router } />
}

export default App;