import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import txtIntro from './txtIntro';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Intro extends PureComponent {
    render() {
        const { toEnd } = this.props;
        const linkStyle = {
            textDecoration: 'underline',
            color: 'blue',
            cursor: 'pointer'
        };

        return (
            <div className="tapp__intro">
                {txtIntro.txt_text}
                <br/>
                <strong onClick={toEnd} style={linkStyle}>{txtIntro.txt_link}</strong>
            </div>
        );
    }
}

Intro.propTypes = {
    toEnd: PropTypes.func.isRequired
};

export default Intro;
