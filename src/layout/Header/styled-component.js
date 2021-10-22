import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({ to: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-transform: capitalize;
  cursor: pointer;
`;

export { HeaderEl, Wrapper, Title, ModeSwitcher }
