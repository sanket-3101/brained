import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constant";

function User() {
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [sst_no, setSSTNO] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getInitial();
  }, []);

  const getInitial = () => {
    axios
      .get(`${BASE_URL}profiles`)
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const handleContinue = async () => {
    if (sst_no != "" && id != "") {
      const object = details.filter((item) => item.id == id)[0];
      await localStorage.setItem("userDetails", JSON.stringify(object));
      axios.defaults.headers.common.id = object.id;
      navigate("/dashboardpage");
    }
  };
  const handleDelete = () => {
    if (id != "") {
      axios
        .delete(`${BASE_URL}profile/${id}`)
        .then((res) => {
          NotificationManager.success("User Deleted Successfully!");
          setId("");
          getInitial();
        })
        .catch((err) => {
          NotificationManager.error("Failed to Delete!");
        });
    }
  };
  const handleEdit = () => {
    if (id != "") {
      const object = details.filter((item) => item.id == id)[0];
      navigate("/login", { state: object });
    }
  };
  return (
    <section className="vh-100 mainarea">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 style={{ color: "white" }}>User's List</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="w-50 mt-10 mr-2">
                <Form.Select
                  onChange={(e) => setSSTNO(e.target.value)}
                  value={sst_no}
                  aria-label="Default select example"
                >
                  <option value=" ">SST No</option>
                  {details.map((item) => (
                    <option value={item.id}>{item.id}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="w-50 mt-10">
                <Form.Select
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  aria-label="Default select example"
                >
                  <option value=" ">Name</option>
                  {details.map((item) => (
                    <option value={item.id}>
                      {item.first_name} {item.last_name}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <Button
                style={{ width: "50%" }}
                onClick={handleEdit}
                className=""
                variant="primary"
              >
                <i class="fa fa-edit mr-2 "></i> Edit{" "}
              </Button>
              <Button
                style={{ width: "60%" }}
                onClick={handleDelete}
                className=""
                variant="danger"
              >
                <i class="fa fa-trash mr-2 "></i> Delete{" "}
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5%",
              }}
            >
              <Button
                style={{ width: "30%" }}
                onClick={() => handleContinue()}
                handleContinue
                className=""
                variant="primary"
              >
                <i class="fas fa-user-tie mr-2 "></i> Continue{" "}
              </Button>
              <Button
                style={{ width: "30%" }}
                onClick={() => navigate("/login")}
                className=""
                variant="primary"
              >
                <i class="fas fa-user-tie mr-2 "></i> Add User{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
