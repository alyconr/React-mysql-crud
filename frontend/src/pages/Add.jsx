import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
const Add = () => {
  const [players, setPlayers] = useState({
    name: "",
    description: "",
    position: "",
    team: "",
    price: "",
    image: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlayers({
      ...players,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (Object.values(players).some((field) => field === "")) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/players", players);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Add New Player</Title>
      <Form>
        <Input
          type="text"
          placeholder="Player Name"
          onChange={handleChange}
          name="name"
          required
        />
        <Textarea
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          required
        />
        <Input
          type="text"
          placeholder="Position"
          onChange={handleChange}
          name="position"
          required
        />
        <Input
          type="text"
          placeholder="Team"
          onChange={handleChange}
          name="team"
          required
        />
        <Input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          required
        />
        <Input
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="image"
          required
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <AddPlayer type="button" onClick={handleClick}>
          Add Player
        </AddPlayer>
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

const AddPlayer = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  width: 120px;
  margin-top: 20px;
  font-size: 15px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled.p`
  color: #FC0313;
  font-weight: bold;
  font-size: 15px;
`;

export default Add;
