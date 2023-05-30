import React, { useState } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";


const FirstTab = ({ addPlayer }) => {
  const [playerData, setPlayerData] = useState({
    firstName: "",
    lastName: "",
    height: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddPlayer = () => {
    if (
      playerData.firstName.trim() !== "" &&
      playerData.lastName.trim() !== "" &&
      playerData.height.trim() !== "" &&
      playerData.position.trim() !== ""
    ) {
      addPlayer(playerData);
      setPlayerData({
        firstName: "",
        lastName: "",
        height: "",
        position: "",
      });
    }
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
      <h2>Create Players</h2>
      <input
        type="text"
        name="firstName"
        value={playerData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="lastName"
        value={playerData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="height"
        value={playerData.height}
        onChange={handleInputChange}
        placeholder="Height"
      /><br></br>
      <br></br>
       <select
        name="position"
        value={playerData.position}
        onChange={handleInputChange}
      >
        <option value="">Select Position</option>
        <option value="PG">Point Guard (PG)</option>
        <option value="SG">Shooting Guard (SG)</option>
        <option value="SF">Small Forward (SF)</option>
        <option value="PF">Power Forward (PF)</option>
        <option value="C">Center (C)</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
    </Box>
    </Container>
  );
};

export default FirstTab;