import React from "react";
import { useEffect } from "react";
import Navbar from "./NavBar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";


const FirstQuarter = (props) => {
  useEffect(() => {
    console.log("players....", props.players[1]);
  }, []);

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="sm">
      <Box
        bgcolor="#f2f6fc"
        pt={2}
        mb={2}
        pl={5}
        noValidate
        sx={{
          flexGrow: 1,
          // marginTop: 8,
          alignItems: "center",
        }}
      >
      <h2>Players:</h2>
      <select>
          <option value={props.players[1]?.FirstName ?? ''}>
            {props.players[1]?.FirstName ?? ''}
          </option>
      </select>
      <select>
          <option value={props.players[3]?.FirstName ?? ''}>
            {props.players[3]?.FirstName ?? ''}
          </option>
      </select>
      </Box>
      </Container>
    </div>
  );
};

export default FirstQuarter;