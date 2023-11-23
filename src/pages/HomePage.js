import React from 'react'
import History from '../components/History'

const HomePage = () => {
    return (
        <>
            <h1 className='text-center m-4 fw-bold'>Profile</h1>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center align-">
                                    <div className='d-flex justify-center '>
                                        <img
                                            src="https://i.postimg.cc/FHfdMXFw/IMG-0022.jpg"
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
                                <div>
                                    <h5 className="my-3">Napat Praphakamol</h5>
                                    <p className="text-muted mb-1">คณะวิศกรรมศาสตร์ สาขาไฟฟ้า </p>
                                    <p className="text-muted mb-4">ชั้นปีที่ 4</p>
                                    <p>GPAX : 3.97 | Credits : 73 Credits | Activity Hours : 14.3 hrs</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <label>Past Activity</label>
                    </div>
                        <History/>
                </div>
            </section >
        </>
    )
}

export default HomePage