import Player from "./components/Player";
import Songs from "./components/Songs";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { render } from "@testing-library/react";
export default function App() {
  
  const [songs, setSongs] = useState([
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/A.mp3", name: "Aaaram" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/B.mp3", name: "Doremon" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/C.mp3", name: "Dil duba" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/B.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/D.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/C.mp3"},
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/E.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/F.mp3"},
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/G.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/H.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/I.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/J.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/K.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/L.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/M.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/N.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/O.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/P.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/Q.mp3"},
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/R.mp3"},
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/S.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/T.mp3"  },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/U.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/V.mp3"  },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/W.mp3" },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/X.mp3"  },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/Y.mp3"  },
    { audio: "http://192.168.0.103:4444/api/fs/storage/emulated/0/Ringtones/Z.mp3"  },

  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="home">
          {" "}
          <h3 id="title">HOME</h3>{" "}
        </Link>

        {console.log(songs)}
        <Routes>
          <Route
            path="home"
            index
            element={
              <Songs
                search={search}
                setSearch={setSearch}
                songs={songs}
                setSongs={setSongs}
              />
            }
          ></Route>
          <Route path="player" index element={<Player />}></Route>

          <Route
            path="player1"
            index
            element={<Player song={songs} index={0} />}
          ></Route>
          <Route
            path="player2"
            index
            element={<Player song={songs} index={1} />}
          ></Route>
          <Route
            path="player3"
            index
            element={<Player song={songs} index={2} />}
          ></Route>
          <Route
            path="player4"
            index
            element={<Player song={songs} index={3} />}
          ></Route>
          <Route
            path="player5"
            index
            element={<Player song={songs} index={4} />}
          ></Route>
          <Route
            path="player6"
            index
            element={<Player song={songs} index={5} />}
          ></Route>
          <Route
            path="player7"
            index
            element={<Player song={songs} index={6} />}
          ></Route>
          <Route
            path="player8"
            index
            element={<Player song={songs} index={7} />}
          ></Route>
          <Route
            path="player9"
            index
            element={<Player song={songs} index={8} />}
          ></Route>
          <Route
            path="player10"
            index
            element={<Player song={songs} index={9} />}
          ></Route>
          <Route
            path="player11"
            index
            element={<Player song={songs} index={10} />}
          ></Route>
          <Route
            path="player12"
            index
            element={<Player song={songs} index={11} />}
          ></Route>
          <Route
            path="player13"
            index
            element={<Player song={songs} index={12} />}
          ></Route>
          <Route
            path="player14"
            index
            element={<Player song={songs} index={13} />}
          ></Route>
          <Route
            path="player15"
            index
            element={<Player song={songs} index={14} />}
          ></Route>
          <Route
            path="player16"
            index
            element={<Player song={songs} index={15} />}
          ></Route>
          <Route
            path="player17"
            index
            element={<Player song={songs} index={16} />}
          ></Route>
          <Route
            path="player18"
            index
            element={<Player song={songs} index={17} />}
          ></Route>
          <Route
            path="player19"
            index
            element={<Player song={songs} index={18} />}
          ></Route>
          <Route
            path="player20"
            index
            element={<Player song={songs} index={19} />}
          ></Route>
          <Route
            path="player21"
            index
            element={<Player song={songs} index={20} />}
          ></Route>
          <Route
            path="player22"
            index
            element={<Player song={songs} index={21} />}
          ></Route>
          <Route
            path="player23"
            index
            element={<Player song={songs} index={22} />}
          ></Route>
          <Route
            path="player24"
            index
            element={<Player song={songs} index={23} />}
          ></Route>
          <Route
            path="player25"
            index
            element={<Player song={songs} index={24} />}
          ></Route>
          <Route
            path="player26"
            index
            element={<Player song={songs} index={25} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
