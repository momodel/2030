import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="w-screen h-screen min-w-[1200px] flex flex-col justify-between">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
