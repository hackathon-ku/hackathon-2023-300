import React from 'react'
import ActivityItem from '../components/ActivityItem'

const HomePage = () => {
    return (
        <>
            <h1>NisitKU+</h1>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center align-">
                                    <div className='d-flex justify-center '>
                                        <img
                                            src="https://i.postimg.cc/HLssP1Cw/student-profile.jpg"
                                            alt="avatar"
                                            className="img-fluid"
                                            style={{
                                                width: '100%', // Make sure the image covers the entire container
                                                height: '100%',
                                                objectFit: 'cover', // Crop the image
                                                objectPosition: 'center center', // Center the image
                                            }}
                                        />
                                    </div>
                                    <h5 className="my-3">John Smith</h5>
                                    <p className="text-muted mb-1">คณะวิศกรรมศาสตร์ สาขาไฟฟ้า </p>
                                    <p className="text-muted mb-4">ชั้นปีที่ 4</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <label>Past Activity</label>
                    </div>
                        <ActivityItem />
                </div>
            </section >
        </>
    )
}

export default HomePage