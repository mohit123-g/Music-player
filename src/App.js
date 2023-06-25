import Player from "./components/Player";
import Songs from "./components/Songs";
import song1 from "./songs/A.mp3";
import song2 from "./songs/B.mp3";
import song3 from "./songs/C.mp3";
import song4 from "./songs/D.mp3";
import song5 from "./songs/E.mp3";
import song6 from "./songs/F.mp3";
import song7 from "./songs/G.mp3";
import song8 from "./songs/H.mp3";
import song9 from "./songs/I.mp3";
import song10 from "./songs/J.mp3";
import song11 from "./songs/K.mp3";
import song12 from "./songs/L.mp3";
import song13 from "./songs/M.mp3";
import song14 from "./songs/N.mp3";
import song15 from "./songs/O.mp3";
import song16 from "./songs/P.mp3";
import song17 from "./songs/Q.mp3";
import song18 from "./songs/R.mp3";
import song19 from "./songs/S.mp3";
import song20 from "./songs/T.mp3";
import song21 from "./songs/U.mp3";
import song22 from "./songs/V.mp3";
import song23 from "./songs/W.mp3";
import song24 from "./songs/X.mp3";
import song25 from "./songs/Y.mp3";
import song26 from "./songs/Z.mp3";

import "./styles.css"
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { render } from "@testing-library/react";
export default function App() {

  
  const [songs,setSongs]=useState([{audio:song1 ,name:"Aaaram" },{audio:song2,name:"Doremon"},
  {audio:song3 , name:"Dil duba"},
    {audio:song4},{audio:song5},{audio:song6}, {audio:song7},{audio:song8},{audio:song9}, 
    {audio:song10},{audio:song11},{audio:song12},  {audio:song13},{audio:song14},{audio:song15}, 
    {audio:song16},{audio:song17},{audio:song18},  {audio:song19},{audio:song20},{audio:song21}, 
    {audio:song22},{audio:song23},{audio:song24}, {audio:song25},{audio:song26}                    
                                 ] );
 const [search,setSearch]=useState("");
  return (
    <div className="App" >
   
     <BrowserRouter>
       
        <Link to="home"> <h3 id="title">HOME</h3>  </Link>
      
     {console.log(songs)}
           <Routes>
            <Route  path="home" index element={<Songs
                                                search={search} 
                                                setSearch={setSearch}
                                                songs={songs} 
                                                setSongs={setSongs}
                                      
                                                />}></Route>
            <Route  path="player" index element={<Player  />}></Route>
         
            <Route  path="player1" index element={<Player song={songs} index={0}/>}></Route>
            <Route  path="player2" index element={<Player song={songs} index={1}/>}></Route>
            <Route  path="player3" index element={<Player song={songs} index={2}/>}></Route>
            <Route  path="player4" index element={<Player song={songs} index={3}/>}></Route>
            <Route  path="player5" index element={<Player song={songs} index={4}/>}></Route>
            <Route  path="player6" index element={<Player song={songs} index={5}/>}></Route>
            <Route  path="player7" index element={<Player song={songs} index={6}/>}></Route>
            <Route  path="player8" index element={<Player song={songs} index={7}/>}></Route>
            <Route  path="player9" index element={<Player song={songs} index={8}/>}></Route>
            <Route  path="player10" index element={<Player song={songs} index={9}/>}></Route>
            <Route  path="player11" index element={<Player song={songs} index={10}/>}></Route>
            <Route  path="player12" index element={<Player song={songs} index={11}/>}></Route>
            <Route  path="player13" index element={<Player song={songs} index={12}/>}></Route>
            <Route  path="player14" index element={<Player song={songs} index={13}/>}></Route>
            <Route  path="player15" index element={<Player song={songs} index={14}/>}></Route>
            <Route  path="player16" index element={<Player song={songs} index={15}/>}></Route>
            <Route  path="player17" index element={<Player song={songs} index={16}/>}></Route>
            <Route  path="player18" index element={<Player song={songs} index={17}/>}></Route>
            <Route  path="player19" index element={<Player song={songs} index={18}/>}></Route>
            <Route  path="player20" index element={<Player song={songs} index={19}/>}></Route>
            <Route  path="player21" index element={<Player song={songs} index={20}/>}></Route>
            <Route  path="player22" index element={<Player song={songs} index={21}/>}></Route>
            <Route  path="player23" index element={<Player song={songs} index={22}/>}></Route>
            <Route  path="player24" index element={<Player song={songs} index={23}/>}></Route>
            <Route  path="player25" index element={<Player song={songs} index={24}/>}></Route>
            <Route  path="player26" index element={<Player song={songs} index={25}/>}></Route>
           </Routes>
  
        </BrowserRouter>
   
    </div>
  );
}
