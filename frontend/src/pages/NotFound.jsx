import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <img
        src="/404NotFound.png"
        alt="not found"
        className="max-w-full mb-6 w-96"
      />
      <p className="text-xl font-semibold text-black mb-4">
        Trang bạn tìm kiếm không tồn tại
      </p>
      <a href="/" className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-sky-400 rounded-2xl hover:bg-sky-500">
        Quay về trang chủ
      </a>
    </div>
  )
}

export default NotFound