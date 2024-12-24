import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  // Fetching data produk
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products"); // Pastikan URL API Anda benar
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fungsi untuk menghapus produk
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setDataList(dataList.filter((data) => data.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Fungsi untuk mengedit produk
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // Fungsi untuk menambahkan produk
  const handleAdd = () => {
    navigate("/add-product");
  };

  useEffect(() => {
    fetchData();
  }, []); // Menambahkan efek kosong untuk mengambil data produk

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div style={{ width: "80%", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", color: "#FF6347" }}>Produk Roti Kami</h1>
        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginBottom: "20px",
            backgroundColor: "#FFA500",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} /> Tambah Produk
        </button>
        <table
          style={{
            margin: "0 auto",
            borderCollapse: "collapse",
            width: "100%",
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#FF6347", color: "white" }}>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Deskripsi</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((product) => (
              <tr key={product.id} style={{ borderBottom: "1px solid #ccc" }}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => handleEdit(product.id)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#FFA500",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      backgroundColor: "#FF6347",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
