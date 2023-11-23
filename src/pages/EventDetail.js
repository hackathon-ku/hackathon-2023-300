  import React from 'react';
  import './EventDetailCSS.css'
  import InteractIMG from '../components/InteractIMG'
  function EventDetail() {
    return (
      <>
        
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="EventDetailCSS.css" />
        </head>
        <body>
          <h1 className="NisitKU">NisitKU</h1>

          <header className="act-trans-title">Activity Transcript</header>

          <br />
          <br />

          <div>
            <label className="header">รับสมัครนิสิตอาสาสมัครนนทรีเกมส์</label><br />
            <label className="context">มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</label><br />
            <label className="context">รายละเอียดกิจกรรม</label><br />
            <p className="context_indent">รับสมัครนิสิตอาสาสมัคร ฝ่ายเปิดและปิดการแข่งขันกีฬามหาวิทยาลัย ครั้งที่ 49 นนทรีเกมส์ 67</p><br />
          </div>

          <div>
            <label className="context">คุณสมบัติ
              <ul>
                <li className="bullet">เป็นนิสิตคณะศิลปศาสตร์และวิทยาศาสตร์</li>
                <li className="bullet">มีมนุษย์สัมพันธ์ดี สามารถทำงานร่วมกับคนอื่นได้</li>
                <li className="bullet">สามารถปฎิบัติงานระหว่างวันที่ 25-27 มกราคม 2567 (การฝึกซ้อมพิธีเปิดและปิด) และวันที่ 5 กุมพาพันธ์ 2567 (พิธีปิด) ได้</li>
              </ul>
            </label>
          </div>

          <div>
            <label className="context">สวัสดิการ
              <ul>
                <li className="bullet">เสื้อสตาฟ จำนวน 1 ตัว</li>
                <li className="bullet">อาหาร 1 มื้อ / วัน</li>
                <li className="bullet">ต่าสมนาคุณ วันละ 150 บาท</li>
                <li className="bullet">หน่วยกิจกรรมด้านส่งเสริมสุขภาพ จำนวน 6 ชั่วโมง / วัน</li>
              </ul>
              <label className="context-center">รับสมัครจำนวน 220 คน</label>
            </label>
            <br />
          </div>

          <div>
            <label className="context">ระยะเวลารับสมัคร ตั้งแต่ 1 พฤศจิกายน - 10 พฤศจิกายน 2566</label><br />
            <label className="context">สมัครได้ที่ <a href="https://kasets.art/ETL5LJ">https://kasets.art/ETL5LJ</a></label><br />
            <label className="context">หมวด กิจกรรมด้านพัฒนาสุขภาพ</label><br />
          </div>
          <img className="center" src="https://i.postimg.cc/Xv9FPnmh/event1.png" width="222" height="315"/>
        </body>
        <InteractIMG imagePath="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" to = "/"/>
      </>
    );
  }

  export default EventDetail;

