import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";

function Router(){
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
    </Routes>
    
    </BrowserRouter>
}
export default Router
