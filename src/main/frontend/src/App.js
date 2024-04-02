import BoardContainer from "./containers/BoardContainer";
import {Route, Routes} from "react-router-dom";
import BoardItem from "./components/BoardItem";
import Home from "./components/Home";
import Layout from "./Layout";
import BoardWrite from "./components/BoardWrite";
import BoardUpdate from "./components/BoardUpdate";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={"/boards"} element={<BoardContainer />} />
              <Route path={"/boards/:id"} >
                  <Route index element={<BoardItem />} />
                  <Route path={"update"} element={<BoardUpdate />} />
              </Route>
              <Route path={'/write'} element={<BoardWrite />}/>
          </Route>
      </Routes>
  );
}

export default App;
