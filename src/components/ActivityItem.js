import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const ActivityItem = () => {
    const [activityData, setActivityData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/post-server')
        .then((res)=>{
            console.log(res.data);
            if (activityData.length === 0){
                setActivityData(res.data);
            }
            else{
                return
            }
        })
        .catch(err => console.log(err))
        
    },[activityData])
    




    return (
        <>
        {activityData.map((item) => {
            console.log(item);
            <p>{JSON.stringify(item)}</p>
        })}
        
        </>
    )

}


export default ActivityItem