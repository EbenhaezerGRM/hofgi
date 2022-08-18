import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                <Navbar.Brand href="/">HALL OF FAME</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#Character">CHARACTER</Nav.Link>
                    <Nav.Link href="#Senjata">WEAPON</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar