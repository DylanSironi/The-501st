import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HoloCharts from './HoloCharts';

function Recruiter(props) {
    let [openTroopers, setOpenTroopers] = useState([])

    useEffect(()=>{
        getOpenTroopers()
    }, 
    [])

    const getOpenTroopers = () => {
        axios.get('/api/open-cards')
            .then(res => {
                setOpenTroopers(res.data)
            })
            .catch(err => console.log(err))
    }
        const mappedTroopers = openTroopers.map((troopers, i) => (
            <HoloCharts
                key={i}
                troopers={troopers}
                recruitFn={props.recruitFn}
                refreshFn={getOpenTroopers} />
        ))
        return (
            <div className='troop-flex'>
                {mappedTroopers}
            </div>
        )
}
export default Recruiter;
