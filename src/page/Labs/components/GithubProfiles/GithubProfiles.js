import React, { useState, useEffect } from "react";
import { Form, Card, Image, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 15px;
`;

const CardName = styled.div`
  font-weight: bold;
  padding: 10px;
`;

const CardUsername = styled.div`
  text-align: center;
`;

const CardContent = styled.div`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 40px 80px 40px 80px;
  width: 700px;
  min-height: 600px;
  background: #1d2951;
  text-align: center;
  margin: 70px auto;
  border-radius: 20px;

  @media (max-width: 700px) {
    min-width: 300px;
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
  }

  .user-form {
    margin-bottom: 15px;
    display: flex;
  }

  .user-input {
    padding: 14px 32px 14px 16px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #ebcf63;
    outline: none;
    width: 240px;
    background: transparent;
    color: #b29eb5;
  }

  .user-input::placeholder {
    color: #fff;
  }

  .user-button {
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(90deg, #ebcf63 0%, #2575ac 100%);
    color: #fff;
    text-transform: capitalize;
    white-space: nowrap;
  }
`;

function GithubProfiles() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <Container>
      <div>
        <Heading>
          <h1>Any Github Profile to Check ?</h1>
        </Heading>
      </div>
      <Form classname="user-form" onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          id="search"
          placeholder="Search a Github User"
          onChange={handleSearch}
        />
        <button className="user-button ">Search</button>
      </Form>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="card">
          <Card>
            <Image src={avatar} wrapped ui={false} />
            <CardContent>
              <CardName>{name}</CardName>
              <CardUsername>{userName}</CardUsername>
            </CardContent>
            <CardContent extra>
              <div>
                <Icon name="user" />
                {followers} Followers
              </div>
            </CardContent>
            <CardContent extra>
              <div>
                <Icon name="user" />
                {repos} Repos
              </div>
            </CardContent>
            <CardContent extra>
              <div>
                <Icon name="user" />
                {following} Following
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Container>
  );
}

export default GithubProfiles;
