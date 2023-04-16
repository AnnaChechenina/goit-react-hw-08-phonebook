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
    <label className={css.filter__lable}>
      <p className={css.filter__description}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter the search name"
      />
    </label>
  );
}

export default Filter;
