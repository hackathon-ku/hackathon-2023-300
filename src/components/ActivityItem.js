import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



const ActivityItem = () => {

const [card,setCard] = useState();

const ActivityItem = ({props}) => {
  const navigation = useNavigate();

  return (
    <Card style={{  }}>
      <Card.Body>
        <Card.Title>ชื่อกิจกรรม</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at neque urna. 
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default ActivityItem