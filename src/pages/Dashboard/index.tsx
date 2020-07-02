import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]); 

  function handleAddRepository() {
    // Adição de um novo repositorio
    // Consumir API do github
    // salvar em algum lugar


  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore respositórios no Github</Title>
      <Form>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8262930?s=460&u=35a6ae0a309acbf2b6b050a91d7aec81a57562c5&v=4"
            alt="Fabio Motta"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable REackJS React Native forms!</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;