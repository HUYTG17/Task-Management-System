import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-linear-to-br from-cyan-50 to-blue-50">
      <h1 className="text-[150px] font-bold text-blue-300 mb-4">404</h1>

      <p className="text-xl font-semibold mb-6">Trang bạn tìm kiếm không tồn tại</p>

      <a
        href="/"
        className="inline-block px-6 py-3 font-medium text-white transition shadow-md bg-cyan-400 rounded-2xl hover:bg-cyan-500"
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFound;