import styled from 'styled-components';

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

const Title = styled.a.attrs({ href: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-transform: capitalize;
  cursos: pointer;
`;

export { HeaderEl, Wrapper, Title, ModeSwitcher }
