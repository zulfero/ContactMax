import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/HomePage";
import Dashboard from "./Dashboard";
import Signupcontent from "./Signupcontent";
import Logincontent from "./Logincontent";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/signupcontent"
          element={
            <Layout>
              <Signupcontent />
            </Layout>
          }
        />
        <Route
          path="/logincontent"
          element={
            <Layout>
              <Logincontent />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
