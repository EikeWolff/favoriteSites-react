import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormComponent from './FormComponent';
import txtForm from './txtForm';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Form extends PureComponent {
    constructor() {
        super();

        this.STARTING_STATE = {
            [txtForm.txt_name]: { value: '', valid: false },
            [txtForm.txt_email]: { value: '', valid: false },
            [txtForm.txt_url]: { value: '', valid: false },
            [txtForm.txt_comnt]: { value: '', valid: true }
        };
        this.state = { ...this.STARTING_STATE };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(name, value, valid) {
        this.setState({
            [name]: { value, valid: valid === undefined ? true : valid }
        });
    }

    handleClick() {
        const {
            [txtForm.txt_name]: name,
            [txtForm.txt_email]: email,
            [txtForm.txt_url]: url,
            [txtForm.txt_comnt]: comnt
        } = this.state;

        const valid = name.valid && email.valid && url.valid && comnt.valid;

        if (valid) {
            const send = () => {
                const message = `${txtForm.txt_name}: ${name.value}\n ${
                    txtForm.txt_email
                }: ${email.value}\n ${txtForm.txt_url}: ${url.value}\n ${
                    txtForm.txt_comnt
                }: ${comnt.value}`;

                chayns.intercom
                    .sendMessageToPage({
                        text: message
                    })
                    .then((result) => {
                        if (result.ok) {
                            this.setState({
                                ...this.STARTING_STATE
                            });

                            chayns.dialog.alert('', txtForm.txt_commitOk);
                        } else {
                            chayns.dialog.alert('', txtForm.txt_commitFail);
                        }
                    });
            };

            if (chayns.env.user.isAuthenticated) {
                send();
            } else {
                chayns.addAccessTokenChangeListener(send);
                chayns.login();
            }
        } else {
            chayns.dialog.alert(
                '',
                `${txtForm.txt_wrongInput} ${
                    name.valid ? '' : txtForm.txt_name
                } ${email.valid ? '' : txtForm.txt_email} ${
                    url.valid ? '' : txtForm.txt_url
                } ${comnt.valid ? '' : txtForm.txt_comnt}`
            );
        }
    }

    render() {
        const { open, dataGroup } = this.props;

        return (
            <FormComponent
                values={this.state}
                open={open}
                onChange={this.handleChange}
                onSubmit={this.handleClick}
                dataGroup={dataGroup}
            />
        );
    }
}

Form.propTypes = {
    open: PropTypes.bool.isRequired,
    dataGroup: PropTypes.string.isRequired
};

export default Form;
