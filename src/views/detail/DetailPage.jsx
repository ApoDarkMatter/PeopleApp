import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

const DetailPage = () => {

  const { id } = useParams()

  const [person, setPerson] = useState({})

  const getPerson = async () => { 
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/?id=${id}&seed=abc`)
      const result = response.data.results
      console.log(result[0].picture.large);
      setPerson(result[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPerson()
  }, [])
  

  return (
    <>
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src={person.picture.large}
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <MDBTypography tag="h5">{person.name.title} {person.name.first} {person.name.last}</MDBTypography>
                    <MDBCardText>{person.location.city}</MDBCardText>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <MDBCardText className="font-italic mb-1">Mobile: {person.cell}</MDBCardText>
                      <MDBCardText className="font-italic mb-1">Phone: {person.phone}</MDBCardText>
                      <MDBCardText className="font-italic mb-0">Mail: {person.email}</MDBCardText>
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