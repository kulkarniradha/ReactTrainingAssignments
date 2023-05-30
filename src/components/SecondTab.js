import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import './SecondTab.css';

const SecondTab = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const handlePlayerSelection = (e) => {
    setSelectedPlayer(e.target.value);
    console.log(e.target.value);
  };

  const getSelectedPlayerPosition = () => {
    const selectedPlayerObj = players.find((player) => player.firstName === selectedPlayer);
    return selectedPlayerObj ? getPositionName(selectedPlayerObj.position) : "";
    // console.log("lll",selectedPlayerObj);
  };

  return (
    <Container component="main" maxWidth="sm">
 <Box
        bgcolor="#f2f6fc"
        pt={2}
        pb={4}
        mb={2}
        pl={5}
        noValidate
        sx={{
          flexGrow: 1,
          // marginTop: 8,
          alignItems: "center",
        }}
      >
    <div>
      <h2>Players:</h2>
      <select value={selectedPlayer} onChange={handlePlayerSelection} >
        <option value="">Select a Player</option>
        {players.map((player) => (
          <option key={player.firstName} value={player.firstName}>
            {`${player.firstName} ${player.lastName}`}
          </option>
        ))}
      </select>
      <select>
        <option value={getSelectedPlayerPosition()}>{getSelectedPlayerPosition()}</option>
      </select>
    </div>
    </Box>
    </Container>
  );
};

// Helper function to get the full position name based on the abbreviation
const getPositionName = (position) => {
  switch (position) {
    case "PG":
      return "Point Guard";
    case "SG":
      return "Shooting Guard";
    case "SF":
      return "Small Forward";
    case "PF":
      return "Power Forward";
    case "C":
      return "Center";
    default:
      return "";
  }
};

export default SecondTab;