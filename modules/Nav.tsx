import { Col, Row } from "react-bootstrap";

const NavSidebar = (props: {
    logo: { name: string, to: string }
    links: Array<{ name: string, to: string }>
}) => {
    const { logo, links } = props;
    const NavLinks: any = () => links.map((link: {name: string, to: string}) => 
    <li key={link.name}>
        <a href={link.to}>{link.name}</a>
    </li>);

    return (
        <div style={{background: "black", height: "500px", width: "auto"}}>
            <Row>
                <Col>

                </Col>
            </Row>
        </div>
    )

}

export default NavSidebar;