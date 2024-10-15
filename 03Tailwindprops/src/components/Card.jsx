import React from 'react';

function Card({imgsrc="https://www.pexels.com/photo/charming-rooftops-of-historic-chinon-france-28540681/",title = "lorem",content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, totam. Suscipit sequi cupiditate perferendis maiores, illo illum sit debitis dicta!"}) {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src=""
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
            
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="text-gray-400">
            {content}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Card;