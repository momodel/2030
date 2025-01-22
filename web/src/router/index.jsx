import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home.jsx";
import TopicOne from "../pages/TopicOne.jsx";
import TopicTwo from "../pages/TopicTwo.jsx";
import TopicThree from "../pages/TopicThree.jsx";
import { NotFound } from "../pages/NotFound.jsx";

const RoutePaths = {
  HOME: "/",
  TOPIC_ONE: "/topic-one",
  TOPIC_TWO: "/topic-two",
  TOPIC_THREE: "/topic-three",
};

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.TOPIC_ONE} element={<TopicOne />} />
      <Route path={RoutePaths.TOPIC_TWO} element={<TopicTwo />} />
      <Route path={RoutePaths.TOPIC_THREE} element={<TopicThree />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { Router, RoutePaths };
