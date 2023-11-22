import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'



const ActivityItem = () => {

    const [card,setCard] = useState();
  return (
    <Card style={{  }}>
      <Card.Body>
        <Card.Title>ชื่อกิจกรรม</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at neque urna. 
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default ActivityItem