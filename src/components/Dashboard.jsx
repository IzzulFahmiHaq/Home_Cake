import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/data/all"); // Ganti dengan endpoint yang sesuai
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/data/delete/${id}`); // Ganti dengan endpoint yang sesuai
      setDataList(dataList.filter((data) => data.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editdata/${id}`);
  };

  const handleAdd = () => {
    navigate("/tambahroti"); // Mengarahkan ke halaman Tambah Roti
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    background: "linear-gradient(to bottom, #f5f5f5, #e5e5e5)",
    padding: "20px",
    borderRadius: "10px",
  }}
>
  <div style={{ width: "80%", textAlign: "center" }}>
    <h1
      style={{
        marginBottom: "20px",
        color: "#FF6347",
        fontSize: "36px",
        fontFamily: "serif",
        fontWeight: "bold",
      }}
    >
      Data Produk
    </h1>
    <button
      onClick={handleAdd}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        marginBottom: "20px",
        background: "linear-gradient(45deg, #FFA500, #FF6347)",
        color: "white",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        transition: "transform 0.2s, background 0.2s",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} /> Tambah
      Produk
    </button>
    <table
      style={{
        margin: "0 auto",
        borderCollapse: "collapse",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: "#FF6347",
            color: "white",
            fontFamily: "serif",
            fontSize: "18px",
          }}
        >
          <th>ID</th>
          <th>Nama Produk</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataList.map((data) => (
          <tr key={data.id} style={{ borderBottom: "1px solid #ddd" }}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
            <td>
              <button
                onClick={() => handleEdit(data.id)}
                style={{
                  marginRight: "10px",
                  background: "linear-gradient(45deg, #FFA07A, #FF6347)",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button
                onClick={() => handleDelete(data.id)}
                style={{
                  background: "linear-gradient(45deg, #FF4500, #FF6347)",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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
