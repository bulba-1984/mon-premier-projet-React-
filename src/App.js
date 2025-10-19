import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9fa', minHeight: 
'100vh' }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">⚛️ Mon Premier Projet 
React</Navbar.Brand>
        </Container>
      </Navbar>

      <header className="text-center my-5">
        <h1 className="fw-bold">Bienvenue dans React avec Bootstrap</h1>
        <p className="text-muted">Voici mes trois premières cartes 
stylisées.</p>
      </header>

      <Container>
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Img variant="top" 
src="https://picsum.photos/300/200?1" />
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>
                  Exemple de contenu avec React-Bootstrap. Simple, clair 
et rapide.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Img variant="top" 
src="https://picsum.photos/300/200?2" />
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>
                  Une carte réactive avec du style grâce à Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Img variant="top" 
src="https://picsum.photos/300/200?3" />
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>
                  Facile à personnaliser et parfaite pour débuter avec 
React.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center mt-5 py-4 bg-dark text-light">
        <p className="mb-0">© 2025 Mon Premier Projet React — Tous droits 
réservés.</p>
      </footer>
    </div>
  );
}

export default App;

// petite mise à jour automatique
