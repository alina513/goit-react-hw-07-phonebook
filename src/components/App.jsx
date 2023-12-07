import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { Toaster } from 'react-hot-toast';
import {Loader} from "../components/Loader";
import { selectIsLoading } from '../redux/selectors';
import { selectError } from '../redux/selectors';

export const App = () => {
  const dispatch= useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {dispatch(fetchContacts())}, [dispatch]);
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingLeft: '20px',
          paddingBottom: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <Toaster/>
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && !error && <Loader/>}
        <Filter />
          <ContactsList/>
      </div>
    );
  }

