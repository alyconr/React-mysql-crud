import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const Update = () => {
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
  const { id } = useParams();

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
      await axios.put(`http://localhost:5000/players/${id}`, players);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        />
        <Textarea
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
        />
        <Input
          type="text"
          placeholder="Position"
          onChange={handleChange}
          name="position"
        />
        <Input
          type="text"
          placeholder="Team"
          onChange={handleChange}
          name="team"
        />
        <Input type="number" placeholder="Price" />
        <Input
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="image"
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Edit type="submit" onClick={handleClick}>
          Update Player
        </Edit>
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

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

export default Update;
