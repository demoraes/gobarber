import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-purple.svg';

import Notifications from '../Notifications/index';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Gabriel Moraes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Gabriel Moraes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
