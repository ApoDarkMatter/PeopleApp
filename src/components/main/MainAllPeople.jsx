import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SinglePersonCard from './SinglePersonCard';
import { nanoid } from 'nanoid';
import { Col, Row } from 'react-bootstrap';
import { setAllPeople, setNumPage } from '../../reducers/peopleApp';
import InfiniteScroll from 'react-infinite-scroll-component';

const MainAllPeople = () => {

  const numPage = useSelector((state) => state.people.numPage)

  const searchResult = useSelector((state) => state.people.searchResult)
  const searchField = useSelector((state) => state.people.searchField)
  const allPeople = useSelector((state) => state.people.allPeople)

  const dispatch = useDispatch()
  
  const getAllPeople = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/?page=${numPage}&results=50&seed=abc`)
      const people = response.data.results
      dispatch(setAllPeople(people))
      dispatch(setNumPage(numPage+1))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPeople()
  },[])

  useEffect(() => {
    
  },[searchField])

    if(!searchField) {
      return (
        <>
            <InfiniteScroll
              dataLength={numPage} //This is important field to render the next data
              next={getAllPeople}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollThreshold={1}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
    
            >
              {<Row className="bg-lightblue">
                {allPeople.map((person) => {
                return (
                  <Col xl={2} md={3} sm={12} key={nanoid()}>
                    <SinglePersonCard props={person}/>
                  </Col>
                )
                })}
              </Row>}
            </InfiniteScroll>
        </>
      )
    } else {
      return (
        <>
          {<Row className="bg-lightblue">
            {searchResult.map((person) => {
            return (
              <Col xl={2} md={3} sm={12} key={nanoid()}>
                <SinglePersonCard props={person}/>
              </Col>
            )
            })}
          </Row>}
        </>
      )
    }
    
}

export default MainAllPeople