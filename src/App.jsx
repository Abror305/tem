import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-6">MY Books</h1>

      {/* Кнопка Add Book */}
      <div className="flex justify-center mb-8">
        <button className="btn btn-primary btn-sm">Add Book</button>
      </div>

      {/* Список книг */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {/* Карточка книги 1 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-3 gap-4">
          <img
            src="https://i.ibb.co/YynzvY7/book1.png"
            alt="Tafsiri Hilol"
            className="w-16 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold">Tafsiri Hilol</h2>
            <p className="text-xs text-gray-500">Shayx Muhammad Sodiq Muhammad Yusuf</p>
            <p className="text-sm text-gray-700 mt-1">
              Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar
              romaning bosh qahramonlari Otabek va Kumushbibi atrofida ifodalangan.
            </p>
          </div>
        </div>

        {/* Карточка книги 2 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-3 gap-4">
          <img
            src="https://i.ibb.co/Z1tYxT9/book2.png"
            alt="Ulamolar Nazdida Vaqtning Qadri"
            className="w-16 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold">Ulamolar Nazdida Vaqtning Qadri</h2>
            <p className="text-xs text-gray-500">Abdulfattoh Abu Gudda</p>
            <p className="text-sm text-gray-700 mt-1">
              Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar
              romaning bosh qahramonlari atrofida ifodalangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
