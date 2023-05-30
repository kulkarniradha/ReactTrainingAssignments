import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DropDown from "./DropDown";
import Navbar from "./NavBar";
import "./ComposeTeam.css";
import { useState } from "react";
import FirstQuarter from "./FirstQuarter";


const ComposeTeam = ({onAddPlayer}) => {
   const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //console.log(errors);
  const [players, setPlayers] = useState([]);

  const newPlayers = [];
  const handleAddPlayer = () => {
    // Create five players and add them to the state
    const newPlayer = "";
    onAddPlayer(newPlayer);
    //setPlayers(newPlayers);
   // onAddPlayer(newPlayers); // Pass the new players to the parent component
  };
  console.log(players);
  const onSubmit = (data) => {
    //console.log(data);
    setFormData(data);
    onAddPlayer(data);

    setPlayers((prevData) => {
      // Create a new array by copying the previous data and adding the new item
      const newData = [...prevData, data];
      return newData;
    });
    console.log("ll", formData);
    // console.log("s",data);
    // setFormData({});
    const isEmpty = {
      FirstName: "",
      LastName: "",
      Height: "",
    };
    setFormData(isEmpty);
  };

  const onValChange = (event) => {
    console.log(formData, "formData");
    newPlayers.push(formData);
    console.log("dd"+newPlayers);
    const value = {
      ...formData,

      [event.target.name]: event.target.value,
    };
    console.log(value);
    setFormData(value);
  };

  return (
    <Container component="main" maxWidth="sm">
      {/* <Navbar /> */}
      <Navbar />
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("FirstName", {
              required: "**This field is required**",
            })}
            error={errors.FirstName}
            helperText={errors.FirstName?.message}
            required
            sx={{
              width: 300,
            }}
            value={formData.FirstName}
            margin="normal"
            id="FirstName"
            label="First Name"
            type="text"
            name="FirstName"
            autoComplete="FirstName"
            onChange={onValChange}
            variant="standard"
          />
          <br></br>
          <TextField
            {...register("LastName", {
              required: "**This field is required**",
            })}
            error={errors.LastName}
            helperText={errors.LastName?.message}
            sx={{
              width: 300,
            }}
            value={formData.LastName}
            margin="dense"
            id="LastName"
            label="Last Name"
            type="text"
            name="LastName"
            onChange={onValChange}
            autoComplete="LastName"
            variant="standard"
          />
          <br></br>

          <TextField
            {...register("Height", {
              required: "**This field is required**",
            })}
            error={errors.Height}
            helperText={errors.Height?.message}
            sx={{
              width: 300,
            }}
            value={formData.Height}
            margin="normal"
            id="Height"
            label="Height"
            name="Height"
            onChange={onValChange}
            type="number"
            autoComplete="Height"
            variant="standard"
          />
          <br></br>
          <DropDown />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, ml: 25 }}
            onClick={handleAddPlayer}
          >
            Save
          </Button>         
         
        </form>
      </Box>
    </Container>
  );
};

export default ComposeTeam;
