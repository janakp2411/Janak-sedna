import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Badge = ({name, index, onDeleteBadge}) => (
    <div className="tag">{name} 
        <i onClick={() => onDeleteBadge(index)} className="fa fa-times"></i>
    </div>
)

Badge.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDeleteBadge: PropTypes.func.isRequired
};

export default Badge;