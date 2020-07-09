import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const match = useRouteMatch();

  const selectedPathIndex = ['/', '/import'].findIndex(
    path => path === match.path,
  );

  return (
    <Container size={size} selectedPathIndex={selectedPathIndex}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
