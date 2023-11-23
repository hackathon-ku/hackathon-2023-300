import React from 'react'
import ActivityItemAdmin from '../components/ActivityItemAdmin'

const AdminPage = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossOrigin="anonymous" g
            />
            <h3 className='text-center m-4'>Admin Page</h3>

            <ActivityItemAdmin />


        </>
    )
}

export default AdminPage