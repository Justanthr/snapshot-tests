import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Body>
            <Card.Title>Jennika Wilson</Card.Title>
            <Card.Text>
            Some Text 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard