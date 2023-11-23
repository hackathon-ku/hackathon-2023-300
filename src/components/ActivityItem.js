import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';
import '../index.css';

const ActivityItem = () => {
  const [activityData, setActivityData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/post-server')
      .then((res) => {
        setActivityData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {activityData.map((item, index) => (
        <Card
          key={index}
          className={`m-4 card-user ${openIndex === index ? 'hover-effect' : ''}`}
        >
          <div className='img-container'>
          </div>
          <Card.Body>
            <Card.Title
              className='fw-bold'
              onClick={() => handleToggle(index)}
            >
              {item.actName}
            </Card.Title>
            <Card.Text className='text-start'>{item.actType} </Card.Text>
            <Card.Text className='text-start'>{item.actDate} </Card.Text>
            <Collapse in={openIndex === index}>
              <div>
                <Card.Text>{item.actDetail}</Card.Text>
                
                <p className='d-flex justify-end'>
                  <Card.Text className='text-end'>{item.actHour} ชั่วโมง</Card.Text>
                </p>
                <p className='d-flex justify-end'>

                </p>
                <Card.Text className='text-end'>{item.actPlace}</Card.Text>
                <div className='d-flex justify-end'>
                  <Button
                    variant="success" href='/eventDetail' 
                  >
                    อ่านต่อ
                  </Button>
                </div>
              </div>
            </Collapse>
            <div className='d-flex justify-content-end'>

            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ActivityItem;
