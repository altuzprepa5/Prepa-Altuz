import React from "react";

export const Reviews = (props) => {
  const { review } = props;

  const { title, content, author, avatar, date } = review;
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={avatar}
          alt={author}
        />
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};
