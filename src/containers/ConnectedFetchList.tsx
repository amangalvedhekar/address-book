import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPersonList} from 'src/store/persons/actions';
import Card from 'src/components/Card';
import * as FlexGrid from 'src/components/Grid';
import {ContactItem} from 'src/store/persons/reducer';
import {personListSelector} from 'src/store/persons/selectors';

export default function ConnectedFetchList() {
  const contactList = useSelector(personListSelector);
  const [fetchData, setFetchData] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchPersonList.request({
        results: 150,
        seed: 'abc',
        inc: 'name,phone,picture',
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    setFetchData(contactList);
  }, [contactList]);
  return (
    <>
      <FlexGrid.Grid>
        {fetchData &&
          fetchData.length > 1 &&
          fetchData.map((contact: ContactItem) => (
            <Card firstName={contact.name.first} key={contact.key} id={contact.key} />
          ))}
      </FlexGrid.Grid>
    </>
  );
}
