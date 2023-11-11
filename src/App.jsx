import { HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Service from "./Pages/Service";
import AppNav from "./Pages/AppNav";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <div>
      <HashRouter>
      <AppNav/>
        <Routes>
          <Route path="/" element = { <Home/> } />
          <Route path="/product" element = { <Product/>} />
          <Route path="/contact" element = {  <Contact/> } />
          <Route path="/service" element = { <Service/> } />
          <Route path= "/blogs" element = {<Blogs/>} />
          <Route path="/blogs/:title" element = {<Blog/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
