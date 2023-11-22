import React from 'react'
import { Form, Button } from 'react-bootstrap';


const SubmissionPage = () => {
    const onClickHandler = () => {
        
    }

    return (
        <div>
            <h1 className='text-center'>Activity Submission Page</h1>
            <div>
                <Form className='m-5'>
                    <Form.Group className="mb-3" controlId="activity-title">
                        <Form.Label>ชื่อกิจกรรม</Form.Label>
                        <Form.Control placeholder="กรอกชื่อกิจกรรม" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="activity-place">
                        <Form.Label>สถานที่จัดกิจกรรม</Form.Label>
                        <Form.Control placeholder='กรอกสถานที่จัดกิจกรรม' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>รายละเอียดกิจกรรม</Form.Label>
                        <Form.Control placeholder='กรอกรายละเอียดกิจกรรม' as="textarea" rows={10} />
                    </Form.Group>
                </Form>
                <Button className="text-center" variant="success" onClick={onClickHandler}>ยอมรับ</Button>
            </div>
        </div>
    )
}

export default SubmissionPage