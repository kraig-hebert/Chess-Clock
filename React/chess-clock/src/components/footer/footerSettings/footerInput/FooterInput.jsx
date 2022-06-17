// import basics
import React from 'react';
import './footerInput.css';
import { useStateContext } from '../../../../contexts/ContextProvider';

const FooterInput = ({ props }) => {
  const { handleFooterInputChange } = useStateContext();
  return (
    <>
      <input
        type="text"
        defaultValue={props.value}
        className={`footerInput ${props.class}`}
        maxLength="2"
        onChange={(e) => handleFooterInputChange(e, props.name)}
      />
    </>
  );
};
export default FooterInput;
