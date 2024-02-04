import React, { useEffect } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setGender, setName, setNationality } from '../../reducers/peopleApp'

const SearchBy = () => {

    const dispatch = useDispatch()

    const resetFilter = () => {
        dispatch(setName(""))
        dispatch(setGender("all"))
        dispatch(setNationality("all"))
    }

    const filter = useSelector((state) => state.people.filter)
  
    useEffect(() => {

    }, [dispatch])

    return (
        <>
            <Row className="searchBar">
                <h2>SearchBy</h2>
                <Col xl={3} md={3} sm={12}>
                    <Form.Label>First Name/Last Name</Form.Label>
                    <Form.Control 
                        value={filter.name}
                        type="text" 
                        placeholder="Search by name" 
                        onChange= {(e) => dispatch(setName(e.target.value))}
                    />
                </Col>
                <Col xl={3} md={3} sm={12}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" value={filter.gender} onChange={(e) => dispatch(setGender(e.target.value))}>
                        <option value="all">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </Col>
                <Col xl={3} md={3} sm={12}>
                    <Form.Label>Nation</Form.Label>
                    <Form.Select aria-label="Default select example" value={filter.nationality} onChange={(e) => dispatch(setNationality(e.target.value))}>
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
                <Col xl={3} md={3} sm={12}>
                    <Button variant="warning" className="btnReset" onClick={resetFilter}>Reset Filter</Button>
                </Col>
            </Row>
        </>
    )
}

export default SearchBy