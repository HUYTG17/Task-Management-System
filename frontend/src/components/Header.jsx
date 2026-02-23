import React from "react";

export const Header = () => {
  return (
    <div className="space-y-2 text-center p-6 rounded-lg bg-white/50">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-4xl font-bold text-cyan-400">
          Todo List
        </h1>
      </div>

      <p className="text-slate-600">
        Đừng bao giờ bỏ cuộc, mỗi bước nhỏ đều đưa bạn đến gần hơn với ước mơ 💪
      </p>
    </div>
  );
};

export default Header;
