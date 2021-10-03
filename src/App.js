import NotFount from "./components/NotFount/NotFount"
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    // add Router 
    <BrowserRouter>

    {/* add header section  */}
    <Header></Header>
      <Switch>
        {/*this route show home page  */}
        <Route path = "/home">
          <Home></Home>
        </Route>
        {/*this route show about page  */}
        <Route path = "/about">
          <About></About>
        </Route>
        {/*this route show service page  */}
        <Route path = "/service">
          <Services></Services>
        </Route>
        {/*this route show Contact us page  */}
        <Route path = "/contact">
          <Contact></Contact>
        </Route>
        {/*this route show Home page  */}
        <Route exact path = "/">
          <Home></Home>
        </Route>
        {/*this route show NOt fount page  */}
        <Route path = "*">
          <NotFount></NotFount>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
