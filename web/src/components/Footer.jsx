const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] border-t flex text-[#8D929B] text-[12px] items-center justify-center">
      <div className="flex justify-between items-center w-[1200px] h-14">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <div className="ml-8 line-clamp-1">
            版权所有 新一代人工智能科教创新开放平台 技术支持 XXXXXXXXXX公司
          </div>
        </div>
        <div className="flex items-center">
          <div>© ️2024 ICSTEP</div>
          <div className="ml-8 line-clamp-1">邮箱：icstep@zju.edu.cn</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
