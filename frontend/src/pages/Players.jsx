import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/players");
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const deletePlayer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/players/${id}`);
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <Container>
      <Title>NBA PLAYERS POSTERS </Title>
      <ButtonAdd>
        <StyledLink to="/add">Add New Player</StyledLink>
      </ButtonAdd>
      <PlayerContainer>
        {players.map((player) => (
          <Player key={player.id}>
            {player.image && <img src={player.image} alt={player.name} />}
            <CenteredName>{player.name}</CenteredName>
            <Description>
              <Span>Description:</Span> {player.description}
            </Description>
            <Position>
              <Span>Position:</Span> {player.position}
            </Position>
            <Team>
              <Span>Team:</Span> {player.team}
            </Team>
            <Price>
              <Span>Price:</Span> ${player.price}
            </Price>
            <Actions>
              <Delete onClick={() => deletePlayer(player.id)}>
                Delete Player
              </Delete>
              <Update>
                <StyledLink to={`/update/${player.id}`}>Update</StyledLink>
              </Update>{" "}
            </Actions>
          </Player>
        ))}
      </PlayerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  padding: 20px;
  margin-top: -1px;
  font-size: 40px;
  background: linear-gradient(to right, #00b09b, #96c93d);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #c72063;
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -10px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: -10px;
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 200px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    img {
      width: 150px;
      height: 250px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
      margin: 0 auto;
    }
  }
`;

const CenteredName = styled.h3`
  &&& {
    font-weight: bold;
    color: #121212;
    text-align: center;
  }
`;

const Span = styled.span`
  font-weight: bold;
  color: #121212;
`;

const Description = styled.span`
  font-weight: bold;
  color: #c72063;
`;

const Position = styled.span`
  font-weight: bold;
  color: #c72063;
`;

const Team = styled.span`
  font-weight: bold;
  color: #c72063;
`;

const Price = styled.span`
  font-weight: bold;
  color: #c72063;
`;

const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(to right, #00b09b, #96c93d);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #c72063;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #c72063;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const Delete = styled.button`
  background: linear-gradient(to right, #00b09b, #96c93d);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #c72063;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Update = styled.button`
  background: linear-gradient(to right, #00b09b, #96c93d);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #c72063;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Players;
