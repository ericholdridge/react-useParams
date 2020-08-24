/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

// Components
import Hero from "./components/Hero";
import FullCard from "./components/FullCard";

const App = () => {
  const data = [
    {
      title: "html",
      info: "This is the html card",
    },
    {
      title: "css",
      info: "This is the css card",
    },
    {
      title: "javascript",
      info: "This is the javascript card",
    },
  ];
  return (
    <div css={styles} className="App">
      <Router>
        <Route exact path="/">
          <Hero data={data} />
        </Route>
        <Route path="/cards/:title">
          <FullCard data={data}/>
        </Route>
      </Router>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export default App;
