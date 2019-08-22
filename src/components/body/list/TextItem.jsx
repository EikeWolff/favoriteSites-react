import React from 'react';
import PropTypes from 'prop-types';

function TextItem(props) {
    const { text } = props;

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '64px'
    };

    return (
        <div style={style}>
            <div>{text}</div>
        </div>
    );
}

TextItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default TextItem;
