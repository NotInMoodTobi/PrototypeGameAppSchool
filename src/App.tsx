import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getAllGames } from "./api/games";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { IGame, useGameContext } from "./contexts/games";
import Main from "./pages/Main";

<ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;

function App() {
  const [gameList, setGameList] = useState<IGame[]>([]);
  const [searchResult, setSearchResult] = useState<IGame[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect{() => {
    const currentGames = getAllGames()
    setGameList(currentGames)
  }}

  const options = {
    includeScore: true,
    keys: ["title", "genre"],
  };

  const fuse = new Fuse(gameList.games, options);

  const handleGameSearch = (search: string) => {
    search.length > 1 ? setIsSearching(true) : setIsSearching(false);
    setSearchResult(fuse.search(search).map((result) => result.item));
  };

  return (
    <>
      <div className="flex flex-row">
        <Sidebar handleGameSearch={(e: any) => handleGameSearch(e)} />
        <Main displayedList={isSearching ? searchResult : gameList.games} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
