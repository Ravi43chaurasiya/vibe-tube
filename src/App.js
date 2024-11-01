import Body from "./components/Body";
import Head from "./components/Head";
import {Provider} from "react-redux"
import store from "./utils/store";



function App() {
  return (
    <Provider store={store}> 
    <div className="App">
    <Head></Head>
    <Body></Body>
 </div>
 </Provider>
   
  );
}

export default App;
