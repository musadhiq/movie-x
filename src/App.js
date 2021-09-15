import "./App.css";
import MovieExpand from "./components/Detailed/MovieExpand";
import NavBar from "./components/Header/NavBar";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { MovieContext } from "./Context";
import { useState } from "react";
import Upcoming from "./components/Upcoming/Upcoming";
import notFound from "./components/404";
import Youtube from "./components/Youtube/Youtube";

function App() {
  const [id, setId] = useState(619778);

  return (
    <>
      <MovieContext.Provider value={{ id, setId }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Upcoming />
              <MovieList />
            </Route>
            <Route path="/movie" exact>
              <MovieExpand />
            </Route>
            <Route path={`/movie/youtube`}>
              <Youtube />
            </Route>
            <Route component={notFound} />
          </Switch>
          <Footer />
        </Router>
      </MovieContext.Provider>
    </>
  );
}

export default App;
