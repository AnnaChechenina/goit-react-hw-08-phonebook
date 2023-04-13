import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = evt => {
    dispatch(setQuery(evt.target.value));
  };

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
