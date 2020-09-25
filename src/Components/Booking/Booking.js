import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Place from '../../FakeData/Place.json';
import calender from '../../Icon/calender_icon.png';
import DatePicker from 'react-datepicker';
// import './Booking.css';

const Booking = () => {
    const { id } = useParams()
    const place = [...Place];
    const data = place[id];

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <MDBContainer className="py-5">
                <MDBRow className="py-5">
                    {/* ------- left side -- selected place details */}
                    <MDBCol className="col-md-5">
                        <div style={{ color: 'white', height: '250px' }} className=" mt-5">
                            <h1 className="name"><strong className="name-style">{data.name}</strong></h1> <br/>
                            <p className="details">{data.details}</p>
                        </div>
                        <Link to="/"><MDBBtn color="primary"> <MDBIcon icon="arrow-left" /> Back</MDBBtn></Link>
                    </MDBCol>
                    {/* ----- right side */}
                    <MDBCol className="col-md-7">
                        <div className="form w-75 ml-5" style={{ backgroundColor: 'white' }}>
                        {/* ----------------- booking form */}
                            <form action="" style={{ background: 'white', padding: '20px 20px', borderRadius: '20px' }}>
                                <label htmlFor="Origin">Origin</label><br />
                                <input className="form-control" value="Dhaka" type="text" required /><br />
                                <label htmlFor="Destination">Destination</label>
                                <input className="form-control" value={data.name} type="text" required /> <br />
                                <div className="d-flex justify-content-between">
                                    <div left>
                                        <label>From</label><br />
                                        <label className="d-flex wrap">
                                            <img src={calender} height="20" alt=""/> &nbsp;&nbsp;
                                            <DatePicker className="red-border w-75 border-style" closeOnScroll={true} selected={startDate} calendarIcon onChange={date => setStartDate(date)}/>
                                        </label>
                                    </div>
                                    <div right>
                                        <label>To</label><br />
                                        <label className="d-flex wrap">
                                            <img src={calender} height="20" alt=""/> &nbsp;&nbsp;
                                            <DatePicker className="red-border w-75 border-style" closeOnScroll={true} selected={endDate} calendarIcon onChange={date => setEndDate(date)}/>
                                        </label>
                                    </div>
                                </div>
                                <br />
                                <Link to={`/hotels/${data.name}`}><MDBBtn className="ml-5 w-75" color="amber" type="submit">Start Booking</MDBBtn></Link>
                            </form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Booking;
