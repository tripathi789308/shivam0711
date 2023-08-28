import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

export const Link = styled.a`
  background-color: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`;
