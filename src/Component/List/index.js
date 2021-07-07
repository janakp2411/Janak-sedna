import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge'
import Input from '../Input';
import './index.css';

const List = (props) => {

    const { name, created_at, tags = [], index } = props
    const [value, setValue] = useState("");

    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    const onAddTag = () => {
        if(value){
            props.onAddTag(value, index)
            setValue("");
        } else {
            alert('Please Add Tag Name')
        }
    }

    const onDeleteBadge = (tagIndex) => {
        props.onDeletetag(index, tagIndex)
    }

    return(
        <div className="list">
            <div className="list-name">
                <div className="name">{name}</div>
                <div className="date">Date: {created_at}</div>
            </div>
            <div className="list-tags">
                { tags.map((name, i) => <Badge onDeleteBadge={onDeleteBadge} index={i} key={i} name={name} />) }
            </div>
            <div className="list-input-field">
                <Input disabled={tags.length > 4 } placeholder="Tag Name" type="text" value={value} onChange={onInputChange} />
            </div>
            <div className="list-add-cta">
                <button disabled={tags.length > 4 } onClick={onAddTag}>Add Tag</button>
            </div>
        </div>
    )
}

List.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    tags: PropTypes.array
};


export default List;