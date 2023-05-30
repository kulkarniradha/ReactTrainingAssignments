import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  console.log(props.player)
 const navigate= useNavigate();

 const handleCompse =() => {
  navigate("/");
 }
 const handleFirst = () => {
  navigate("/firstquarter");
 }
  return (
    <Container component="main" maxWidth="sm">
      <Box
        noValidate
        sx={{
          flexGrow: 1,
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Stack direction={"row"} spacing={2}>
              <Button color="inherit" onClick={handleCompse}>Compose Team</Button>

              <Button color="inherit" onClick={handleFirst}>First Quarter</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Navbar;