import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';
import txtList from './txtList';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class List extends PureComponent {
    constructor() {
        super();

        this.STARTING_STATE = {
            data: [
                {
                    siteId: '75508-06235',
                    appstoreName: 'Loading...'
                }
            ]
        };
        this.state = { ...this.STARTING_STATE };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData(txtList.txt_standardSearch);
    }

    async fetchData(searchValue) {
        const { fetchLinkStart, fetchLinkEnd } = this.props;

        chayns.showWaitCursor();
        await fetch(`${fetchLinkStart}${searchValue}${fetchLinkEnd}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data.Data != null ? data.Data : [] }))
            .catch(error => console.log(error));
        chayns.hideWaitCursor();
    }

    render() {
        const { open, dataGroup } = this.props;
        const { data } = this.state;

        return (
            <ListComponent
                data={data}
                open={open}
                onSearchEnter={this.fetchData}
                onClick={
                    siteId => chayns.openUrlInBrowser(
                        `${txtList.txt_chaynsLink}${siteId}`
                    )
                }
                dataGroup={dataGroup}
            />
        );
    }
}

List.propTypes = {
    open: PropTypes.bool.isRequired,
    fetchLinkStart: PropTypes.string.isRequired,
    fetchLinkEnd: PropTypes.string.isRequired,
    dataGroup: PropTypes.string.isRequired
};

export default List;
