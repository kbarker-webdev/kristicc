import { ModeComment, WindowSharp } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { clearClosedRequests, getCustomRequests, markRequestAsComplete } from "../axios-services";
import { useNavigate } from "react-router-dom";
import '../style/Requests.css'

const Requests = (props) => {
    const [customRequests, setCustomRequests] = useState([]);
    const [reload, setReload] = useState({});
    const [areClosedOrders, setAreClosedOrders] = useState(false);
    const demoMode = props;
    const navigate = useNavigate();

    let f_requests = [
        {
            id: 1,
            date: Date.now(),
            pid: '30oz skinny',
            color: '#FFFFF',
            usertext: 'Test Text',
            font: 'Test Font',
            comments: 'additional info on the request...',
            name: 'Kenny',
            phone: '111-111-1111',
            email: 'test@test.com',
            complete: false
        },
        {
            id: 2,
            date: Date.now(),
            pid: '20oz skinny',
            color: '#FFFFF',
            usertext: 'Test Text',
            font: 'Test Font',
            comments: 'additional info on the request...',
            name: 'Shirly',
            phone: '111-111-1111',
            email: 'test@test.com',
            complete: false
        },
        {
            id: 3,
            date: Date.now(),
            pid: '30oz skinny',
            color: '#FFFFF',
            usertext: 'Test Text',
            font: 'Test Font',
            comments: 'additional info on the request...',
            name: 'Suzzy',
            phone: '111-111-1111',
            email: 'test@test.com',
            complete: false
        },
        {
            id: 4,
            date: Date.now(),
            pid: '30oz skinny',
            color: '#FFFFF',
            usertext: 'Test Text',
            font: 'Test Font',
            comments: 'additional info on the request...',
            name: 'Adam',
            phone: '111-111-1111',
            email: 'test@test.com',
            complete: false
        }
    ]

    useEffect(() => {
        if (demoMode) {
            setAreClosedOrders(false);
            setCustomRequests(f_requests);
            f_requests.map(request => {
                request.complete ? setAreClosedOrders(true) : null;
            })
        } else {
            setAreClosedOrders(false);
            getCustomRequests()
                .then(res => {
                    setCustomRequests(res);
                    res.map(request => {
                        request.complete ? setAreClosedOrders(true) : null;
                    })
                })
        }
    }, [reload]);

    const clickRequest = (e, request) => {
        if (e.target.id === "complete") {
            if (demoMode) {
                const newState = customRequests.map(req => {
                    if (req.id === request.id) {
                      return {...req, complete: true};
                    }

                    return req;
                  });
                  setCustomRequests(newState);
                  setAreClosedOrders(true);
            } else {
                markRequestAsComplete(request.id, true)
                setReload({ request: request.id, complete: true })
            }
            
        } else if (e.target.id === "restore") {
            if (demoMode) {
                const newState = customRequests.map(req => {
                    if (req.id === request.id) {
                      return {...req, complete: false};
                    }

                    return req;
                  });
                  setCustomRequests(newState);
                  setAreClosedOrders(false);
            } else {
                markRequestAsComplete(request.id, false)
                setReload({ request: request.id, complete: false })
            }
        } else {
            navigate(`/admin/orders/${request.id}`)
        }
    }

    const boxSX = {
        p: 2,
        backgroundColor: 'rgba(255,255,255,0.13)',
        height: '380px',
        "&:hover": {
            color: '#080710',
            backgroundColor: 'rgba(255,255,255,0.50)'
        },
    };

    const buttonSX = {
        backgroundColor: 'rgba(255,255,255,0.50)',
        marginTop: '2.5px',
        color: '#080710',
        "&:hover": {
            color: '#080710',
            backgroundColor: 'rgba(255,255,255,0.75)'
        },
    }

    return (
        <div id='requests-container'>
            <h1 className="open-orders">Open Orders:</h1>
            <div className="center-card">
                {customRequests.map(request => {
                    return (
                        !request.complete ?
                            // <Link to={`/admin/orders/${request.id}`}>

                            <Card key={request.id} className="request" id="request-card" variant="outlined" sx={boxSX} onClick={(e) => { clickRequest(e, request) }}>
                                <h2 className="card-title">{request.name}</h2>
                                Product: {request.pid}<br />
                                Color: {request.color}<br />
                                Text: {request.usertext}<br />
                                Font: {request.font}<br />
                                Comments: {request.comments}<br />
                                <br />
                                <b>Contact Information</b><br />
                                <br />
                                Phone: {request.phone}<br />
                                Email: {request.email}<br />
                                <br />
                                Date: {request.date}
                                <br />
                                <br />
                                <Button
                                    id='complete'
                                    variant='contained'
                                    sx={buttonSX}
                                    onClick={(e) => clickRequest(e, request)}
                                >
                                    Order Complete
                                </Button>
                            </Card>
                            // </Link>

                            : null

                    )
                }
                )}
            </div>
            <h1 className="closed-orders">Closed Orders:</h1>
            <div className="center-card">
                {customRequests.map(request => {
                    return (
                        request.complete ?
                            <Card key={request.id} className="request" variant="outlined" sx={boxSX} onClick={(e) => { clickRequest(e, request) }}>
                                <h2 className="card-title">{request.name}</h2>
                                Product: {request.pid}<br />
                                Color: {request.color}<br />
                                Text: {request.usertext}<br />
                                Font: {request.font}<br />
                                Comments: {request.comments}<br />
                                <br />
                                <b>Contact Information</b><br />
                                <br />
                                Phone: {request.phone}<br />
                                Email: {request.email}<br />
                                <br />
                                Date: {request.date}
                                <br />
                                <br />
                                <Button
                                    id='restore'
                                    variant='contained'
                                    sx={buttonSX}
                                    onClick={(e) => clickRequest(e, request)}
                                >
                                    Re-Open Order
                                </Button>
                            </Card>
                            : null


                    )

                }
                )

                }
            </div>
            <br />
            {areClosedOrders ?
                <div className="clear-closed-orders">
                    <p className="warning-msg">
                        <b id='warn'>WARNING:</b> This will <b>PERMANENTLY</b> remove all closed orders. <b>This can not be un-done!</b>
                    </p>
                    <Button
                        sx={{ width: 600 }}
                        id='clear'
                        color="warning"
                        variant='contained'
                        onClick={() => {
                            if (window.confirm("Are you sure you REALLY want to clear all closed orders PERMANETLY?")) {
                                if (demoMode) {
                                    const newState = customRequests.map(req => {
                                        return {...req, complete: false};
                                      });
                                      setCustomRequests(newState);
                                      setAreClosedOrders(false);
                                } else {
                                    clearClosedRequests();
                                    setReload({});
                                }
                            }
                        }}
                    >
                        Clear All Closed Orders
                    </Button>
                </div>
                : null
            }
        </div>
    )
}

export default Requests;