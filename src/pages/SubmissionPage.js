import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SubmissionPage = () => {
    const [actName, setActName] = useState("")
    const [actPlace, setActPlace] = useState("")
    const [actType, setActType] = useState("")
    const [actHour, setActHour] = useState("")
    const [actDetail, setActDetail] = useState("")

    const handleInputChange = (e, setStateFunction) => {
        // Update the corresponding state with the input value
        setStateFunction(e.target.value);
    };

    const generateUniqueId = () => {
        // Simple function to generate a unique ID
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const onClickHandler = async () => {
        try {
            // Prepare the data to be sent to the server
            const data = {
                id: generateUniqueId(),
                actName,
                actPlace,
                actType,
                actHour,
                actDetail,
            };
            // Make a POST request using Axios
            const response = await axios.post('http://localhost:5000/post-server', data);

            // Handle the response as needed
            console.log('Post response:', response.data);
        } catch (error) {
            // Handle errors
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h3 className='text-center m-4'>Activity Submission</h3>
            <div>
                <Form className='m-5'>
                    <Form.Group className="mb-3" controlId="activity-title">
                        <Form.Label>ชื่อกิจกรรม</Form.Label>
                        <Form.Control placeholder="กรอกชื่อกิจกรรม" value={actName} onChange={(e) => handleInputChange(e, setActName)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="activity-place">
                        <Form.Label>สถานที่จัดกิจกรรม</Form.Label>
                        <Form.Control placeholder='กรอกสถานที่จัดกิจกรรม' value={actPlace} onChange={(e) => handleInputChange(e, setActPlace)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="activity-place">
                        <Form.Label>ประเภทกิจกรรม</Form.Label>
                        <Form.Control placeholder='กรอกประเภทกิจกรรม' value={actType} onChange={(e) => handleInputChange(e, setActType)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="activity-place">
                        <Form.Label>จำนวนชั่วโมงกิจกรรมที่ได้</Form.Label>
                        <Form.Control placeholder='กรอกชั่วโมงกิจกรรมที่ได้' value={actHour} onChange={(e) => handleInputChange(e, setActHour)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>รายละเอียดกิจกรรม</Form.Label>
                        <Form.Control placeholder='กรอกรายละเอียดกิจกรรม' as="textarea" rows={10} value={actDetail} onChange={(e) => handleInputChange(e, setActDetail)} />
                    </Form.Group>
                </Form>
                <Button className="text-center" variant="success" onClick={onClickHandler}>ยอมรับ</Button>
            </div>
        </div>
    )
}

export default SubmissionPage