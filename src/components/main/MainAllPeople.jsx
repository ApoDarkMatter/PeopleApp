import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SinglePersonCard from './SinglePersonCard';
import { nanoid } from 'nanoid';
import { Col, Row } from 'react-bootstrap';
import { getUsers, setPage } from '../../reducers/peopleApp';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ThreeDots } from 'react-loader-spinner';

const MainAllPeople = () => {

  const dispatch = useDispatch()

  //call redux state filter and users
  const filter = useSelector((state) => state.people.filter)
  const users = useSelector((state) => state.people.users)
  const filteredResult = useSelector((state) => state.people.filteredResult)
  const page = useSelector((state) => state.people.pageTEMP)


  //fecthData on first run
  useEffect(() => {
    if(users.length === 0) {
      dispatch(getUsers(1))
    }
  }, []);

  //function to fetch data users
  const fetchData = () => {
    dispatch(setPage())
    dispatch(getUsers(page))
  };
  
  //control if filter are standard show all users data else show only filtered data and disable infinite scroll
  if(filter.gender === "all" && filter.nationality === "all" && filter.name === "") {
    return (
      <>
          <InfiniteScroll
            dataLength={users.length}
            next={fetchData}
            hasMore={true}
            loader={<ThreeDots
                      visible={true}
                      height="80"
                      width="80"
                      color="#2B3035"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperClass="loadingSpinner"
                    />}
            scrollThreshold={1}
          >
            {<Row className="margin">
              {users.map((user) => {
                return (
                  <Col xl={2} md={3} key={nanoid()}>
                    <SinglePersonCard props={user}/>
                  </Col>
                )
                })}
            </Row>
            }
          </InfiniteScroll>
      </>
    )
  } else {
    return (
      <>
        <Row className="margin">
          {filteredResult.map((user) => {
            return (
              <Col xl={2} md={3} key={nanoid()}>
                <SinglePersonCard props={user}/>
              </Col>
            )
          })}
        </Row>
      </>
    )
    
  }
  
}

export default MainAllPeople