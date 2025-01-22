import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import Layout from "./layouts";
export const App = () => (
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);
