import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  ReposList,
  ReposName,
} from './styles';

export default function User() {
  const [repos, setRepos] = useState([]);
  const route = useRoute();
  const { user } = route.params;

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get(`/users/${user.login}/repos`);

      console.tron.log(response);
      setRepos(response.data);
    }

    loadRepositories();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      <ReposList
        data={repos}
        KeyExtractor={(repo) => String(repo.id)}
        renderItem={({ item }) => <ReposName>{item.name}</ReposName>}
      />
    </Container>
  );
}
