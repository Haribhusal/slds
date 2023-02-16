import React from 'react'
import classes from './Tabs.module.css'
const Tabs = () => {
    return (
        <ul className='my-tab'>
            <li>
                <a href="#">Overview</a>
            </li>
            <li>
                <a href="#" className='active'>Protocols</a>
            </li>
            <li>
                <a href="#">Transaction History</a>
            </li>
            <li>
                <a href="#">Chain</a>
            </li>
            <li>
                <a href="#">Assets</a>
            </li>
            <li>
                <a href="#">Snapshots</a>
            </li>
            <li>
                <a href="#">More</a>
            </li>
        </ul>
    )
}

export default Tabs