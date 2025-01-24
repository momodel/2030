import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import Layout from "./layouts";
export const App = () => (
  <BrowserRouter basename="/2030-web/">
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);
