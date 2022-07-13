import { Col, Row } from "react-bootstrap";

const NavSidebar = (props: {
    // logo: { name: string, to: string }
    links: Array<{ name: string, to: string }>
}) => {

    const { links } = props;

    const NavLinks: any = () => links.map((link: {name: string, to: string}) => 
        <div className="list-panel d-flex justify-content-center align-items-center">
            <li key={link.name}>
                <a href={link.to}>{link.name}</a>
            </li>
        </div>
    );

    return (
        <nav className="nav position-absolute">
            <Row className="h-100">
                <Col className="d-flex col-12 justify-content-center align-items-center h-25">
                    <div className="avatar">

                    </div>
                </Col>
                <Col className="col-12 d-flex justify-content-center">
                    <ul className="w-100 d-flex flex-column justify-content-around">
                        <NavLinks/>
                    </ul>
                </Col>
            </Row>
        </nav>
    )

}

export default NavSidebar;