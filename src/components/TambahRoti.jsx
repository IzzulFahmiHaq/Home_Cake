import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

export default function TambahRoti() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    namaRoti: "",
    hargaRoti: "",
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/roti/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          Swal.fire("Gagal!", "Data tidak ditemukan.", "error");
        }
      };
      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.namaRoti || !formData.hargaRoti) {
      Swal.fire("Gagal!", "Semua field wajib diisi!", "error");
      return;
    }

    try {
      const response = id
        ? await axios.put(`http://localhost:8080/api/roti/${id}`, formData)
        : await axios.post(`http://localhost:8080/api/roti`, formData);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: id ? "Data berhasil diperbarui." : "Data berhasil ditambahkan.",
          timer: 1500,
        });
        navigate("/dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Terjadi kesalahan saat menyimpan data.",
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menyimpan data.",
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
        backgroundImage: "linear-gradient(to bottom, #f5f5f5, #e5e5e5)",
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
          {id ? "Edit Produk" : "Tambah Produk"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nama Roti"
            variant="outlined"
            fullWidth
            name="namaRoti"
            value={formData.namaRoti}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Harga Roti"
            variant="outlined"
            fullWidth
            name="hargaRoti"
            value={formData.hargaRoti}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/dashboard")}
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
              Batal
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "48%",
                backgroundImage: "linear-gradient(45deg, #FFA500, #FF6347)",
                color: "white",
                "&:hover": {
                  backgroundImage: "linear-gradient(45deg, #FF4500, #FF6347)",
                },
              }}
            >
              {id ? "Simpan Perubahan" : "Simpan"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
