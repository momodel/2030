import { RoutePaths } from "../router";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 w-full">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">页面未找到</p>
        <p className="text-gray-500">您访问的页面不存在或已被移除</p>
        <button
          onClick={() => navigate(RoutePaths.HOME)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回首页
        </button>
      </div>
    </div>
  );
};
