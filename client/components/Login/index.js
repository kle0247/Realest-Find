import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const credentials = {
      username: username,
      password: password,
    };

    this.props.login(credentials);
  };

  useEffect(() => {
    handleSubmit()
  }, {});

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
      <Button onSubmit={handleSubmit}>Login</Button>
    </Box>
  );
}

export default connect()(Login);
