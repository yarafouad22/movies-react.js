import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/layout';
import NotFound from './NotFound/NotFound';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Tv from './Tv/Tv';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';

  let x =createBrowserRouter([
    { path : '/',element: <Layout/>,
        children:[
           { index :true,element:<Home/>},
           { path:'movie/:id', element:<Details/>},
           { path : 'Tv',element:<Tv/>},
           { path : 'Gallery',element:<Gallery/>},
           { path : '*',element:<NotFound/>},
    ],
},

]);

export default function App(){
  
    return<Provider store={store}>
    <RouterProvider router={x}/>
  </Provider>
}