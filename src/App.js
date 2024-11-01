import Body from "./components/Body";
import Head from "./components/Head";
import {Provider} from "react-redux"
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ChannelPage from "./components/ChannelPage";



function App() {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body></Body>,
      children:[
        {
          path:"/",
          element:<MainContainer></MainContainer>
        },
        {
          path:"/watchpage",
          element:<WatchPage></WatchPage>
        },
        {
          path:"/channel",
          element:<ChannelPage></ChannelPage>
        }
      ]

    }
  ])

  return (
    <Provider store={store}> 
    <div className="App">
    <Head></Head>
    <RouterProvider router={appRouter}></RouterProvider>
    {/* <Body></Body> */}
 </div>
 </Provider>
   
  );
}

export default App;
