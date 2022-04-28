import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
export default function ContactMe() {
  /* -------Colors-------------- */

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#f5f5f5",
        contrastText: "#fff",
      },
    },
  });
  /* ---------------------------- */
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    console.log("form submitted");

    console.log("data is", data);

    if (!data.email || !data.name || !data.message) return;

    const response = await axios.post("/message/send", data);

    console.log("response is ", response);
  };

  return (
    <div
      style={{ position: "relative", marginTop: "50px", marginBottom: "20px" }}
    >
      <div
        className="developer"
        id="skillText"
        style={{
          position: "absolute",
          top: "50px",
          left: "0",
          fontSize: "2.5rem",
          width: "100%",
          fontStyle: "italic",
        }}
      >
        Contact me
      </div>
      <ThemeProvider theme={theme}>
        <div
          id="contact"
          style={{
            width: "1000px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#f5f5f59d",
            color: "whitesmoke",
            borderRadius: "15px",
            textAlign: "center",
            padding: "20px",
            marginTop: "150px",
          }}
        >
          <TextField
            style={{ textAlign: "center" }}
            color="neutral"
            id="standard-helperText"
            label="Name"
            variant="standard"
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <TextField
            color="neutral"
            id="standard-helperText"
            label="Email"
            required
            variant="standard"
            type="Email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <TextField
            color="neutral"
            multiline
            required
            id="standard-helperText"
            label="Message"
            variant="standard"
            type="Message"
            placeholder="Enter your message"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <Button color="neutral" onClick={handleSubmit}>
            Send Message
          </Button>
        </div>{" "}
      </ThemeProvider>{" "}
    </div>
  );
}
