import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserPost from "./UserPost";
import Create from "./UserPost/Create";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UserPost} />
        <Route path="/create" exact component={Create} />
      </Switch>
    </div>
  );
}

export default App;
