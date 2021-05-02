import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import SingleArticle from "./Pages/SingleArticle";
import FacebookPromotion from "./Pages/services/FacebookPromotion";
import SocialMediaMkt from "./Pages/services/SocialMediaMkt";
import Youtube from "./Pages/services/Youtube";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={SingleArticle} />
          <Route
            exact
            path="/fb-promotion-package"
            component={FacebookPromotion}
          />
          <Route
            exact
            path="/social-media-marketing"
            component={SocialMediaMkt}
          />
          <Route exact path="/youtube-seo" component={Youtube} />
          <Route component={Error} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
