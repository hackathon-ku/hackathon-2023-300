import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../index.css';
import "@fontsource/istok-web"; // Defaults to weight 400
import "@fontsource/istok-web/400.css"; // Specify weight
import "@fontsource/istok-web/400-italic.css"; // Specify weight and style


const ActivityItem = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/post-server')
      .then((res) => {
        setActivityData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
        {activityData.map((item) => (
          <Card className='m-5 card-user'>
            <div className='img-container'>
              <button className='img-mockup'>Image here</button>
            </div>
            <Card.Body className=''>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>
                {item.body}
              </Card.Text>
              <div className='d-flex justify-content-end'>
                <Button variant="primary" >read more</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </>
      );
};

      export default ActivityItem;
