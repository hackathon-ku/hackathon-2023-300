import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import ActivityItem from '../components/ActivityItem';

const TranscriptPage = () => {
  const handleDropdownItemClick = (actType) => {
    console.log(`Dropdown item clicked: ${actType}`);
    // Add any other logic you want to perform when a dropdown item is clicked
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <h3 className='text-center m-4 fw-bold'>All Activity</h3>
      <div className='d-flex justify-center'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            เลือกหมวดหมู่
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมมหาวิทยาลัย')}>กิจกรรมมหาวิทยาลัย</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมเพื่อสร้างเสริมสมรรถนะ')}>กิจกรรมเพื่อสร้างเสริมสมรรถนะ</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมพัฒนาคุณธรรม จริยธรรม')}>กิจกรรมพัฒนาคุณธรรม จริยธรรม</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมสร้างสัมพันธ์และการสื่อสาร')}>กิจกรรมสร้างสัมพันธ์และการสื่อสาร</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมด้านสุขภาพ')}>กิจกรรมด้านสุขภาพ</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('กิจกรรมเพื่อสังคม')}>กิจกรรมเพื่อสังคม</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <ActivityItem />
    </>
  );
}

export default TranscriptPage;
