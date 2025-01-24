import { useState, useEffect } from "react";

const NEWS_INFOS = [1, 2, 3];
const PLATFORM_INFOS = [
  {
    name: "头歌",
    url: "https://www.educoder.net/",
  },
  {
    name: "智海Mo",
    url: "https://mo.zju.edu.cn/",
  },
  {
    name: "百度EasyDL",
    url: "https://ai.baidu.com/easydl/",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NEWS_INFOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Banner Section */}
      <section className="mx-auto max-w-[1920px] w-screen min-w-[1200px]">
        <img src="./home/banner-home.png" alt="banner" className="w-full " />
      </section>

      {/* Features Grid */}
      <section className="w-screen px-4 mx-auto py-16 max-w-[1920px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-center">平台特色</h2>
        <img
          src="./home/platform-feature.png"
          alt="platform"
          className="max-w-[1200px]"
        />
      </section>

      {/* Platform Section */}
      <section className="w-full px-4 mx-auto pb-16 max-w-[1920px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-center">
          教育、实训、应用三大平台
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-[1200px]">
          {PLATFORM_INFOS.map((item, index) => (
            <a
              key={item.name}
              className="bg-white rounded-lg shadow-lg text-center"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`./home/platform-${index + 1}.png`}
                alt="AI Platform"
                className="w-full"
              />
            </a>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="w-screen max-w-[1920px] mx-auto my-8 flex flex-col items-center min-w-[1200px]">
        <div className="w-full  shadow-lg p-6 relative overflow-hidden bg-[url('/home/news-bg.png')] bg-no-repeat bg-cover bg-center h-[540px]">
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            新闻动态
          </h2>
          <div className="relative z-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {NEWS_INFOS.map((item, index) => (
                <div
                  key={item}
                  className="min-w-full p-8 text-white flex flex-col items-center"
                  onClick={() => goToSlide(index)}
                >
                  <img
                    src="./home/news-banner-1.png"
                    alt="news-banner"
                    className="w-[1200px]"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 flex gap-3">
              {NEWS_INFOS.map((item, index) => (
                <button
                  key={item}
                  onClick={() => goToSlide(index)}
                  className={`w-5 h-1 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-700" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-screen px-4 mx-auto py-8 max-w-[1920px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-center">贡献单位</h2>
        <img
          src="./home/partners.png"
          alt="partner"
          className="max-w-[1200px]"
        />
      </section>
    </div>
  );
};

export default Home;
