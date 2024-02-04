import React from 'react'
import { useParams } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

const DetailPage = () => {

  const { id } = useParams()
  
  const user = useSelector((state) => state.people.users.find((user) => user.login.uuid === id))

  return (
    <>
        <div className="gradient-custom-2 bg-lightblue">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src={user.picture.large}
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography tag="h5">{user.name.title} {user.name.first} {user.name.last}</MDBTypography>
                    <MDBCardText>{user.location.city} ({user.nat})</MDBCardText>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Address</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Street: {user.location.street.name} {user.location.street.number}</MDBCardText>
                      <MDBCardText className="font-italic mb-1">Postcode: {user.location.postcode} City: {user.location.city}</MDBCardText>
                      <MDBCardText className="font-italic mb-1">State: {user.location.state}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Country: {user.location.country}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Coordinates: lat: {user.location.coordinates.latitude} - lon: {user.location.coordinates.longitude}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Timezone: {user.location.timezone.offset} {user.location.timezone.description}</MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Gender: {user.gender}</MDBCardText>
                      <MDBCardText className="font-italic mb-1">Mobile: {user.cell}</MDBCardText>
                      <MDBCardText className="font-italic mb-1">Phone: {user.phone}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Mail: {user.email}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Date of birth: {user.dob.date}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Age: {user.dob.age}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Registered from: {user.registered.date}</MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

export default DetailPage