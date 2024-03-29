import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../store/selectors';

import { fetchContacts, removeContact } from '../../store/operations';
import Loader from '../Loader';

import {
  ContactBox,
  Contact,
  ContactList,
  ContactItem,
  ContactButton,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ContactBox>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && !error && (
        <>
          <Contact>Contacts</Contact>
          <ContactList>
            {filteredContacts.map(({ id, name, phone }) => (
              <ContactItem key={id}>
                <p>
                  {name} : {phone}
                </p>
                <ContactButton onClick={() => handleDeleteContact(id)}>
                  Delete contact
                </ContactButton>
              </ContactItem>
            ))}
          </ContactList>
        </>
      )}
    </ContactBox>
  );
};

export default Contacts;
