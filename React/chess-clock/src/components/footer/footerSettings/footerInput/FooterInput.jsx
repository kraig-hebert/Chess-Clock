import React from 'react';
import './footerInput.css';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterInput = ({ props }) => {
  const { handleInputChange } = useStateContext();
  return (
    <>
      <input
        type="text"
        defaultValue={props.value}
        className={`footerInput ${props.class}`}
        maxLength="2"
        onChange={(e) => handleInputChange(e, props.text)}
      />
    </>
  );
};
export default FooterInput;
