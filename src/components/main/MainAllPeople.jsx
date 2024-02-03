import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SinglePersonCard from './SinglePersonCard';
import { nanoid } from 'nanoid';
import { Col, Row } from 'react-bootstrap';
import { getUsers } from '../../reducers/peopleApp';
import InfiniteScroll from 'react-infinite-scroll-component';

const MainAllPeople = () => {

  const dispatch = useDispatch()

  const {filter, users} = useSelector((state) => state.people)

  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const fetchData = () => {
    setPage(page + 1);
  };

  const filteredUsers = users.filter(
    (user) =>
      (filter.gender === "all" || user.gender === filter.gender) &&
      (filter.nationality === "all" || user.nat === filter.nationality) &&
      (user.name.first.toLowerCase().includes(filter.name.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filter.name.toLowerCase()))
  );

  return (
    <>
        <InfiniteScroll
          dataLength={filteredUsers.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollThreshold={1}
        >
          {<Row className="margin">
            {
            filteredUsers.map((user) => {
              return (
                <Col xl={2} md={3} sm={12} key={nanoid()}>
                  <SinglePersonCard props={user}/>
                </Col>
              )
              })}
          </Row>
          }
        </InfiniteScroll>
    </>
  )
}

export default MainAllPeople