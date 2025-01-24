import { Link, useLocation } from "react-router-dom";
import { RoutePaths } from "../router";

const HeaderInfos = [
  {
    path: RoutePaths.HOME,
    name: "首页",
  },
  {
    path: RoutePaths.TOPIC_ONE,
    name: "AI人才培养与能力评测",
  },
  {
    path: "http://162.14.78.165:5173/#/preshow",
    name: "科教资源共享平台",
    isNotRoute: true,
  },
  {
    path: RoutePaths.TOPIC_THREE,
    name: "科教计算智能资源",
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50 border-b">
      <nav className="h-16 flex items-center justify-between w-[1200px] mx-auto">
        <div className="flex items-center">
          <img src="./logo.png" alt="Logo" className="h-8 w-8" />
          <div className="ml-8 space-x-8">
            {HeaderInfos.map((item) =>
              item.isNotRoute ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  className="text-gray-700"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${location.pathname === item.path ? "text-blue-600" : "text-gray-700"}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
