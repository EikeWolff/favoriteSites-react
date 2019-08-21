import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';
import txtList from './txtList';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class List extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    siteId: '75508-06235',
                    appstoreName: 'Loading...'
                }
            ]
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData(txtList.txt_standardSearch);
    }

    async fetchData(searchValue) {
        const { fetchLinkStart, fetchLinkEnd } = this.props;

        chayns.showWaitCursor();
        await fetch(
            `${fetchLinkStart}${searchValue}${fetchLinkEnd}`
        )
            .then(response => response.json())
            .then(data => this.setState({ data: data.Data }))
            .catch(error => console.log(error));
        chayns.hideWaitCursor();
    }

    render() {
        const { open } = this.props;
        const { data } = this.state;

        return <ListComponent data={data} open={open} onSearchEnter={this.fetchData}/>;
    }
}

List.propTypes = {
    open: PropTypes.bool.isRequired,
    fetchLinkStart: PropTypes.string.isRequired,
    fetchLinkEnd: PropTypes.string.isRequired
};

export default List;
