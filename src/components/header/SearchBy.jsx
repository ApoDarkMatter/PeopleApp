import React, { useEffect, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSearchField, setSearchResult } from '../../reducers/peopleApp'

const SearchBy = () => {

    const [searchSelectName, setSearchSelectName] = useState("")
    const [searchSelectGender, setSearchSelectGender] = useState("all")
    const [searchSelectNation, setSearchSelectNation] = useState("all")

    let filter = {searchSelectName,searchSelectGender,searchSelectNation}

    const dispatch = useDispatch()
  
    useEffect(() => {
        const timer = setTimeout(() => {
          dispatch(setSearchResult(filter))
          dispatch(setSearchField(filter))
        }, 250)
    
        return () => clearTimeout(timer)
      
    }, [filter])

    return (
        <>
            <Row className="searchBar">
                <h2>SearchBy</h2>
                <Col xl={4} md={4} sm={12}>
                    <Form.Label>First Name/Last Name</Form.Label>
                    <Form.Control 
                        value={searchSelectName}
                        type="text" 
                        placeholder="Search by name" 
                        onChange= {(e) => setSearchSelectName(e.target.value)}
                    />
                </Col>
                <Col xl={4} md={4} sm={12}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e) => setSearchSelectGender(e.target.value)}>
                        <option value="all">All</option>
                        <option value="male">Male</option>
                        <option value="female">Famale</option>
                    </Form.Select>
                </Col>
                <Col xl={4} md={4} sm={12}>
                    <Form.Label>Nation</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e) => setSearchSelectNation(e.target.value)}>
                        <option value="all">All</option>
                        <option value="AU">AU</option>
                        <option value="BR">BR</option>
                        <option value="CA">CA</option>
                        <option value="CH">CH</option>
                        <option value="DE">DE</option>
                        <option value="DK">DK</option>
                        <option value="ES">ES</option>
                        <option value="FI">FI</option>
                        <option value="FR">FR</option>
                        <option value="GB">GB</option>
                        <option value="IE">IE</option>
                        <option value="IN">IN</option>
                        <option value="IR">IR</option>
                        <option value="MX">MX</option>
                        <option value="NL">NL</option>
                        <option value="NO">NO</option>
                        <option value="NZ">NZ</option>
                        <option value="RS">RS</option>
                        <option value="TR">TR</option>
                        <option value="NA">UA</option>
                        <option value="US">US</option>
                    </Form.Select>
                </Col>
            </Row>
        </>
    )
}

export default SearchBy