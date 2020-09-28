import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPersonList} from 'src/store/persons/actions';
import Card from 'src/components/Card';
import * as FlexGrid from 'src/components/Grid';

export default function ConnectedFetchList() {
  const contactList = useSelector((state: any) => state?.contactList?.personLists);
  const [fetchData, setFetchData] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchPersonList.request({
        results: 50,
        seed: 'abc',
        inc: 'name,phone',
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    setFetchData(contactList);
  }, [contactList]);
  return (
    <>
      <div>
        <FlexGrid.Grid>
          {fetchData &&
            fetchData.length > 1 &&
            fetchData.map((contact: any) => (
              <Card firstName={contact.name.first} key={contact.key} id={contact.key} />
            ))}
        </FlexGrid.Grid>
      </div>
    </>
  );
}
