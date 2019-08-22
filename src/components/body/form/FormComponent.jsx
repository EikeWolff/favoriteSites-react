import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, TextArea, Button } from 'chayns-components';
import TextInput from './TextInput';
import txtForm, { pattern } from './txtForm';

function FormComponent(props) {
    const {
        open, onChange, values, onSubmit, dataGroup, onClose
    } = props;

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <Accordion
            head={txtForm.txt_title}
            open={open}
            dataGroup={dataGroup}
            icon="ts-plus"
            onClose={onClose}
        >
            <div className="accordion__content">
                <TextInput
                    onChange={onChange}
                    values={values[txtForm.txt_name]}
                    name={txtForm.txt_name}
                    pattern={pattern.pattern_name}
                />
                <TextInput
                    onChange={onChange}
                    values={values[txtForm.txt_email]}
                    name={txtForm.txt_email}
                    pattern={pattern.pattern_email}
                />
                <TextInput
                    onChange={onChange}
                    values={values[txtForm.txt_url]}
                    name={txtForm.txt_url}
                    pattern={pattern.pattern_url}
                />
                <TextArea
                    placeholder={txtForm.txt_comnt}
                    value={values[txtForm.txt_comnt].value}
                    onChange={value => onChange(txtForm.txt_comnt, value)}
                />
                <div style={buttonStyle}>
                    <Button onClick={onSubmit}>{txtForm.txt_commitBtn}</Button>
                </div>
            </div>
        </Accordion>
    );
}

FormComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    dataGroup: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default FormComponent;
