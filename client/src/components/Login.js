import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  InputAdornment
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import "./Login.css";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "550px",
        height: "400px",
        marginLeft: "40vh",
        marginTop: "10vh",
        borderRadius: "3%"
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        xs={12}
        sm={6}
        spacing={[1]}
      >
        <Grid item xs={12} sm={6}>
          <div
            style={{
              backgroundColor: "white",
              width: "200px",
              height: "220px",
              position: "relative",
              right: "130px",
              padding: "1rem",
              paddingTop: "3rem",
              paddingLeft: "2rem",
              borderRadius: "10%"
            }}
          >
            <Typography
              variant="h6"
              style={{ fontFamily: "Optima", color: "orangered" }}
            >
              Refugees & Mentors
            </Typography>
            <div style={{ height: "5px" }} />
            <Typography style={{ fontFamily: "Georgia", fontSize: "medium" }}>
              Refugees and Mentors supports refugees and vulnerable migrants to
              improve their employment prospects and get jobs.
            </Typography>
          </div>
        </Grid>
        <Grid container item xs={12} sm={6} style={{ padding: 10 }}>
          <div />
          <div>
            <Grid container justify="center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.-rM8wSa4qazbUMRW3Txf5AHaE8&pid=Api&P=0&w=249&h=167"
                alt="logo"
                width="160px"
                height="100px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              style={{ backgroundColor: "white" }}
            />
            <TextField
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                )
              }}
              style={{ backgroundColor: "white" }}
            />
            <div style={{ height: "5px" }} />
            <Button
              className="btn"
              style={{
                width: "170px",
                backgroundColor: "orangered",
                color: "white",
                borderRadius: "2rem"
              }}
            >
              login
            </Button>
            <div style={{ height: "5px" }} />
            <Button
              className="btn"
              style={{
                width: "170px",
                backgroundColor: "orangered",
                color: "white",
                borderRadius: "2rem"
              }}
            >
              Sign up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
