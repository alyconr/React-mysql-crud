import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Update = () => {
  const [playerData, setPlayerData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPlayerData() {
      try {
        const response = await axios.get(`http://localhost:5000/players/${id}`);
        const playerObject = response.data[0];
        setPlayerData(playerObject);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlayerData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData({
      ...playerData,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !playerData.name ||
      !playerData.description ||
      !playerData.position ||
      !playerData.team ||
      !playerData.price ||
      !playerData.image
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/players/${id}`, playerData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>Update Player</Title>
      <Form>
        <Input
          type="text"
          placeholder="Player Name"
          onChange={handleChange}
          name="name"
          value={playerData.name || ""}
        />
        <Textarea
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={playerData.description || ""}
        />
        <Input
          type="text"
          placeholder="Position"
          onChange={handleChange}
          name="position"
          value={playerData.position || ""}
        />
        <Input
          type="text"
          placeholder="Team"
          onChange={handleChange}
          name="team"
          value={playerData.team || ""}
        />
        <Input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          value={playerData.price || ""}
        />
        <Input
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="image"
          value={playerData.image || ""}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Actons>
          <Edit type="submit" onClick={handleClick}>
            Update Player
          </Edit>
          <Cancel type="button" onClick={cancel}>
            Cancel
          </Cancel>
        </Actons>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 5px;
  background: linear-gradient(to right, #00b09b, #96c93d);
  width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Actons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Edit = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  width: 120px;
  margin-top: 20px;
  font-size: 15px;
`;

const Cancel = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  width: 120px;
  margin-top: 20px;
  font-size: 15px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

export default Update;
