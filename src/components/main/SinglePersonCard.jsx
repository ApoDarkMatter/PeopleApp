import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SinglePersonCard(props) {
  return (
    <>
        <Card>
            <Card.Img variant="top" src={props.props.picture.large} />
            <Card.Body>
                <Card.Title>{props.props.name.title} {props.props.name.first} {props.props.name.last}</Card.Title>
                <Card.Text>
                    {props.props.location.city}
                </Card.Text>
                <Link to={`./detail/${props.props.login.uuid}`}><Button variant="primary">Go to detail</Button></Link>
            </Card.Body>
        </Card>
    </>
  )
}

export default SinglePersonCard