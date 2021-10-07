import { Component } from 'react';
import { Alert, Container, Table } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class BootstrapComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* <Alert color="success">primary</Alert>
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button> */}
                {/* <Navbar color="solid" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler className="mr-2" />
                    <Collapse navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Card>
                    <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card> */}


                {/* implements table */}
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
