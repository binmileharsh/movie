import { createRoot } from "react-dom/client";
import "./index.css";
import { MovieProvider } from "./Moviecontext.jsx";
import { Routes ,BrowserRouter, Route} from "react-router-dom";
import Favourite from "./favourite.jsx";
import Trending from "./trending .jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
 <MovieProvider>
<BrowserRouter>
    <Routes>


    <Route path="/" element={<App />}/>
    <Route path="/fav" element={<Favourite />}/>
    <Route path="/trending" element={<Trending />}/>
    <Route path="/home" element={<App />}/>
   
    </Routes>
        {/* <App /> */}
    </BrowserRouter>




 </MovieProvider>   
);

