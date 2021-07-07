import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({placeholder, value = "", onChange, type="text", disabled=false}) => {
    return <input disabled={disabled} className="input-field" placeholder={placeholder} type={type} value={value} onChange={onChange} />
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
}
export default Input;