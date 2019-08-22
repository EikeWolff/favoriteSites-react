import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'chayns-components';

function TextInput(props) {
    const { onChange, values, name, pattern } = props;

    return (
        <div
            className={`input-group textInp ${!(
                values.value === ''
            ) && 'labelRight'}`}
        >
            <Input
                regExp={pattern}
                value={values.value}
                valid={values.valid}
                onChange={(value, valid) => onChange(name, value, valid)
                }
                required
            />
            <label className={!values.valid && 'input--invalid'}>
                {name}
            </label>
        </div>
    );
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired
};

export default TextInput;
