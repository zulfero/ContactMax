import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/HomePage";
import Signupcontent from "./Signupcontent";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Categories from "../pages/Categories";
import AddCategory from "./AddCategory";
import SingleContact from "../pages/SingleContact";
import Mail from "../pages/Mail";
import AddContact from "../pages/AddContact";
import Profile from "../pages/Profile";
import LogOut from "../pages/LogOut";

function Router({ isopen, setIsopen }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage isopen={isopen} setIsopen={setIsopen} />
            </Layout>
          }
        />
        {/* <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          } */}
        {/* /> */}
        <Route
          path="/dashboard/contacts"
          element={
            <Layout>
              <Contacts />
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
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/dashboard/singlecontact"
          element={
            <Layout>
              <SingleContact />
            </Layout>
          }
        />
        <Route
          path="/dashboard/mail"
          element={
            <Layout>
              <Mail />
            </Layout>
          }
        />
        <Route
          path="/dashboard/addcontact"
          element={
            <Layout>
              <AddContact />
            </Layout>
          }
        />
        <Route
          path="addcat"
          element={
            <Layout>
              <AddCategory />
            </Layout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="logout"
          element={
            <Layout>
              <LogOut />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
