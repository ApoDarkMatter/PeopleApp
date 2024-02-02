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

function SinglePersonCard(props) {
  return (
    <>
        <MDBCard style={{margin:"0.5rem"}}>
          <MDBCardImage src={props.props.picture.large} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{props.props.name.title} {props.props.name.first} {props.props.name.last}</MDBCardTitle>
            <MDBCardText>
              {props.props.location.city}
            </MDBCardText>
            <Link to={`./detail/${props.props.login.uuid}`}><MDBBtn>Go to details</MDBBtn></Link>
          </MDBCardBody>
        </MDBCard>
    </>
  )
}

export default SinglePersonCard