import { Col, Container, Row } from "react-bootstrap";
import LoginSidebar from "../modules/LoginSidebar";

const LoginPage = () => {

    const handleSubmit = () => {

    }
    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="d-flex justify-content-center align-items-center">
                        <form className="d-flex flex-column" onSubmit={handleSubmit}>
                            <h1 className="mb-2">Sign up</h1>
                            <input className="mb-2" type="text" name="username" id="username" placeholder="Username" value="username" />
                            <input className="mb-2" type="text" name="email" id="email" placeholder="Email" value="email" />
                            <input className="mb-2" type="password" name="password" id="password" placeholder="Password" value="password" />
                            <input className="mb-2" type="password-confirm" name="password-confirm" id="password-confirm" placeholder="Confirm Password" />
                            <button type="submit" value="submit">Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default LoginPage;