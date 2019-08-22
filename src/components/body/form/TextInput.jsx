import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'chayns-components';

function TextInput(props) {
    const {
        onChange, values, name, pattern
    } = props;

    const invalid = {}
    if (!values.valid) invalid.invalid = 'invalid';

    return (
            <Input
                regExp={pattern}
                value={values.value}
                placeholder={name}
                onChange={(value, valid) => onChange(name, value, valid)}
                {...invalid}
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
