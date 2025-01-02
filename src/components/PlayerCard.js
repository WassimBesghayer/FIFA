import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PlayerCard({player}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.img} style={{maxHeight:"280px", minHeight:"280px"}}/>
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
         {player.name + player.surname}
         {player.role}
         {player.age}
         {player.jerseyNum}
         {player.nationality}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default playerCard