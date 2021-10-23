import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';

export const NavbarComp = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" dark expand="md" className="navbar fixed-top">
				<NavbarBrand href="/" className="mx-4">
					{props.brand}
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/mahasiswa">Mahasiswa</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="mailto:irdhaislakhuafa@gmail.com">Email</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
						</NavItem>
					</Nav>
					<NavbarText className="ms-auto me-4">ADMIN</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};
