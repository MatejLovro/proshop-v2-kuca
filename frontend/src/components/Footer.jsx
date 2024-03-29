import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  const year = new Date().getUTCFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Proshop &copy; {year} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
