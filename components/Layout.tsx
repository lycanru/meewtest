import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const LayoutComponent = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="bg-light border p-3 min-vh-100">
        <Container fluid className="container-sm">
          <Row>
            <Col>{props.children as any}</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LayoutComponent;
