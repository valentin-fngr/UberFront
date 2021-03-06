import React, { useState, useContext, useEffect } from 'react'; 
import { DevicePositionContext } from '../../contexts/DevicePositionContext';
import MainMap from '../Map/MainMap';
import SideBar from '../SideBar/SideBar';
import './RiderRequest.css';


export default function RiderRequest(props){
    
    return(
        <div className="RiderRequest container-fluid ">
            <div className="row">
                <SideBar />
                <div className="RiderRequest__map no-padding col-md-9">
                    <MainMap />
                </div>
            </div>
        </div>
    )
}