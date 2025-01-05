import { NavLink } from 'react-router';
import styled from 'styled-components';

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 1rem;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 1rem;

  &.active {
    border-bottom: 2px solid var(--accent);
  }
`;

const Header = () => (
  <header>
    <NavMenu>
      <NavItem to="/">Log event</NavItem>
      <NavItem to="/history">History</NavItem>
    </NavMenu>
  </header>
);

export default Header;
