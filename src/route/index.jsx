import Layout from "../component/Layout"
 import Home from "../features/Home"
import Hero2 from "../features/Hero2";


export const Routes = [

    {
        path:"",
        element:<Layout/>,
        children:[
             {
                 path:"",
                element:<Home/>
            }

            ]
    }



        ]