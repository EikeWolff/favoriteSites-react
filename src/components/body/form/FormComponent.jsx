import React from 'react';
import PropTypes from 'prop-types';
import {
 Accordion, Input, TextArea, Button
} from 'chayns-components';
import txtForm, { pattern } from './txtForm';

function FormComponent(props) {
    const {
        open, onChange, values, onSubmit, dataGroup
    } = props;

    return (
        <Accordion head={txtForm.txt_title} open={open} dataGroup={dataGroup}>
            <Input
                regExp={pattern.pattern_name}
                placeholder={txtForm.txt_name}
                value={values[txtForm.txt_name].value}
                valid={values[txtForm.txt_name].valid}
                onChange={(value, valid) => onChange(txtForm.txt_name, value, valid)
                }
                required
            />
            <Input
                regExp={pattern.pattern_email}
                placeholder={txtForm.txt_email}
                value={values[txtForm.txt_email].value}
                valid={values[txtForm.txt_email].valid}
                onChange={(value, valid) => onChange(txtForm.txt_email, value, valid)
                }
                required
            />
            <Input
                regExp={pattern.pattern_url}
                placeholder={txtForm.txt_url}
                value={values[txtForm.txt_url].value}
                valid={values[txtForm.txt_url].valid}
                onChange={(value, valid) => onChange(txtForm.txt_url, value, valid)
                }
                required
            />
            <TextArea
                placeholder={txtForm.txt_comnt}
                value={values[txtForm.txt_comnt].value}
                onChange={value => onChange(txtForm.txt_comnt, value)}
            />
            <Button onClick={onSubmit}>{txtForm.txt_commitBtn}</Button>
        </Accordion>
    );
}

FormComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    dataGroup: PropTypes.string.isRequired
};

export default FormComponent;
