import React, { Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css";
const Continents = lazy(() => import("./components/Continents/Continents"))
const Home = lazy(() => import("./components/Home/home"))
const Map = lazy(() => import("./components/Map/Map"))
const Historical = lazy(() => import("./components/Historical/historical"))
const Layout = lazy(() => import('./components/Layout/layout.js'))


export default function App() {
  return (

    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/map" component={Map} />
              <Route exact path="/historical" component={Historical} />
              <Route exact path="/" component={Home} />
              <Route exact path="/continents" component={Continents} />
            </Switch>
          </Suspense>
        </Layout>
      </Suspense>
    </div>

  );
}
