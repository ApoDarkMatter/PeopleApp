import React from 'react'
import { Link } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Row } from 'react-bootstrap';

function SinglePersonCard(props) {
  return (
    <>
        <MDBCard>
          <MDBCardImage src={props.props.picture.large} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{props.props.name.title} {props.props.name.first} {props.props.name.last}</MDBCardTitle>
            <MDBCardText>
              {props.props.location.city} ({props.props.nat})
            </MDBCardText>
            <Link to={`./detail/${props.props.login.uuid}`}><MDBBtn className="btnCard">Go to details</MDBBtn></Link>
          </MDBCardBody>
        </MDBCard>
    </>
  )
}

export default SinglePersonCard