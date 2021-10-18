import React, { useEffect, useState } from 'react';

import Container from '../Container';
import { HeaderEl, Wrapper, Title, ModeSwitcher } from './styled-component';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

export const Header = () => {
  // Базовый функционал с темизацией
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />} {theme} Mode
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
