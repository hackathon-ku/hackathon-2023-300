import React from 'react'

const HomePage = () => {
    return (
        <>
            <h1>NisitKU+</h1>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                    <h5 className="my-3">John Smith</h5>
                                    <p className="text-muted mb-1">คณะมนุษยศาสตร์ สาขานวัตกรรมการท่องเที่ยว </p>
                                    <p className="text-muted mb-4">ชั้นปีที่ 4</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section >
    </>
  )
}

export default HomePage