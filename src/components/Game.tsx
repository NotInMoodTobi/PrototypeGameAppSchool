import React from "react";

interface IGame {
  id: number;
  Title: string;
  ImageURL?: string;
  Genre: string;
}

const Game: React.FC<IGame> = (props) => {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="relative max-w-sm min-w-[340px] bg-white dark:bg-gray-700 shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden rounded-2xl relative">
              <img
                className="h-60 rounded-1xl w-full object-cover"
                src={props.ImageURL}
                alt="gameIMG"
              />
              <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </p>
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-300 mb-0">
                  {props.Title}
                </p>
                <p className="text-md text-gray-800 dark:text-gray-200 mt-0">
                  {props.Genre}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
