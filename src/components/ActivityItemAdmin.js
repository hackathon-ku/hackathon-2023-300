import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const ActivityItemAdmin = () => {
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
                    <Card className='card m-5'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{item.Title}</Card.Title>
                      <Card.Text>
                        {item.body}
                      </Card.Text>
                      <Button variant="primary">อ่านต่อ</Button>
                      <Button variant="danger">ไม่ยอมรับ</Button>
                      <Button variant="success">ยอมรับ</Button>
                    </Card.Body>
                  </Card>
            ))}
        </>
    );
};

export default ActivityItemAdmin;
