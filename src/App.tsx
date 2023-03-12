import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./component/layout";
import { routeArr } from "./router";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routeArr.map(([key, path, SingleRoute]) => (
            <Route
              key={key}
              path={path}
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <SingleRoute />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
