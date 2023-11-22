import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ActivityItem = () => {
  return (
    <Card style={{  }}>
      <Card.Body>
        <Card.Title>ชื่อกิจกรรม</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at neque urna. 
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ActivityItem