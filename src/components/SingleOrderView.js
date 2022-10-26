import { Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomRequestById, markRequestAsComplete } from "../axios-services";
import { useNavigate } from "react-router-dom";
import '../style/SingleOrderView.css'

const SingleOrderView = () => {
    const { id } = useParams();
    const [request, setRequest] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getCustomRequestById(id)
            .then(res => {
                setRequest(res)
                console.log(res)
            })
    }, [])


    return (
        <div className="single-order">
            <h2>{request.name}</h2>
            Product: {request.pid}<br />
            Color: {request.color}<br />
            Text: {request.userspan}<br />
            Font: {request.font}<br />
            Comments: {request.comments}<br />
            <br />
            <b>Contact Information</b><br />
            <br />
            Phone: {request.phone}<br />
            Email: {request.email}<br />
            <br />
            Date: {request.date}
            <br/><br/>
            Status: {request.complete ? <span className="closed">CLOSED</span> : <span className="open">OPEN</span>}
            <br /><br />
            {request.complete ?
                <Button
                    id='complete'
                    variant='contained'
                    onClick={() => {
                        markRequestAsComplete(request.id, false)
                        navigate(-1)
                    }}
                >
                    Re-Open Order
                </Button>
                :
                <Button
                    id='complete'
                    variant='contained'
                    onClick={() => {
                        markRequestAsComplete(request.id, true)
                        navigate(-1)
                    }}
                >
                    Order Complete
                </Button>
            }
        </div>
    )
}

export default SingleOrderView;