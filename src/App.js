// import React from "react";
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/NavBar";
// import FirstQuarter from "./components/FirstQuarter";
// import ComposeTeam from "./components/ComposeTeam";
// import Navbar from "./components/NavBar";
// const App = () => {
//   // const [formData, setFormData] = useState({});
//   const [players, setPlayer] = useState([]);
  
//   const handleAddPlayer = (newPlayer) => {
//     setPlayer((prevPlayer) => [...prevPlayer, newPlayer]);
//     console.log("new"+players);

//   };
//   console.log(players,"state")
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<ComposeTeam onAddPlayer={handleAddPlayer}/>} />
//           <Route path="/firstquarter" element={ <FirstQuarter players={players}/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// export default App;


import React, { useState } from "react";
import FirstTab from "./components/FirstTab";
import SecondTab from "./components/SecondTab";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

const App = () => {
  const [activeTab, setActiveTab] = useState("createPlayers");
  const [playerList, setPlayerList] = useState([]);

  const addPlayer = (playerData) => {
    setPlayerList([...playerList, playerData]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container component="main" maxWidth="sm">
 <Box
        bgcolor="#f2f6fc"
        noValidate
        sx={{
          flexGrow: 1,
        }}
      >
    <div>
      <div className="tab-container">
        <button
          className={activeTab === "createPlayers" ? "active" : ""}
          onClick={() => handleTabChange("createPlayers")}
        >
          Create Players
        </button>
        <button
          className={activeTab === "players" ? "active" : ""}
          onClick={() => handleTabChange("players")}
        >
          Players
        </button>
      </div>
      {activeTab === "createPlayers" ? (
        <FirstTab addPlayer={addPlayer} />
      ) : (
        <SecondTab players={playerList} />
      )}
    </div>
    </Box>
    </Container>
  );
};

export default App;




