import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../store";

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const credentials = {
      username: username,
      password: password,
    };

    login(credentials);
  };

  return (
    <Box>
      <TextField
        label="username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <TextField
        label="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

const mapDispatch = (dispatch, { history }) => {
  return {
    login: (credentials) => dispatch(login(credentials, history)) 
  }
}

export default connect(null, mapDispatch)(Login);
