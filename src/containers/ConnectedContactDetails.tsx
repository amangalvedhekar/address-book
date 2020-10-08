import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ContactDetails from 'src/components/ContactDetails';
import {personListSelector} from 'src/store/persons/selectors';
export default function ConnectedContactDetails() {
  const {id} = useParams();
  const personLists = useSelector(personListSelector);
  const [contactDetails, setContactDetails] = useState<any>();
  useEffect(() => {
    const foundDetails = personLists.find((elm: any) => elm.key === id);
    setContactDetails(foundDetails);
  }, [id, personLists, contactDetails]);
  return (
    <>
      {contactDetails && contactDetails.key ? (
        <ContactDetails
          firstName={contactDetails.name.first}
          lastName={contactDetails.name.last}
          phoneNumber={contactDetails?.phone}
        />
      ) : (
        <div>not found</div>
      )}
    </>
  );
}
