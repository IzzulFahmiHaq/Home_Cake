import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    const trimmedUsername = formData.username.trim();
    const trimmedPassword = formData.password.trim();

    if (trimmedUsername === "admin" && trimmedPassword === "password123") {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Login berhasil.",
        timer: 1500,
      });
      navigate("/hero");
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Username atau password salah.",
        timer: 1500,
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, #FFEBEE, #FFCDD2, #EF9A9A, #E57373)",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            color: "#FF6347",
            fontWeight: "bold",
          }}
        >
          Login Admin
        </Typography>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/register")}
              sx={{
                width: "48%",
                borderColor: "#FF6347",
                color: "#FF6347",
                "&:hover": {
                  backgroundColor: "#FF6347",
                  color: "#fff",
                },
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              onClick={handleLogin}
              sx={{
                width: "48%",
                backgroundImage: "linear-gradient(45deg, #FFA500, #FF6347)",
                color: "white",
                "&:hover": {
                  backgroundImage: "linear-gradient(45deg, #FF4500, #FF6347)",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginAdmin;
