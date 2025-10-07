import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs" className="my-4">
      <h2>Tabs</h2>
      <Nav variant="tabs">
        <NavItem>
          <NavLink href="#/LAB/Lab2/Active">Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/LAB/Lab2/Link1">Link 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/LAB/Lab2/Link2">Link 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#/LAB/Lab2/Disabled" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
