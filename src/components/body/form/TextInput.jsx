import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'chayns-components';

function TextInput(props) {
    const {
        onChange, values, name, pattern
    } = props;

    return (
            <Input
                regExp={pattern}
                value={values.value}
                valid={values.valid}
                placeholder={name}
                onChange={(value, valid) => onChange(name, value, valid)}
                dynamic
                required
            />
    );
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired
};

export default TextInput;
