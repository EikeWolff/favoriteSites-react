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
            data: []
        };
        this.state = { ...this.STARTING_STATE };

        this.timeout = null;
        this.fetchData = this.fetchData.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.fetchData(txtList.txt_standardSearch);
    }

    onSearch(searchValue) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.fetchData(searchValue);
        }, 1000);
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
        const { open, dataGroup, onClose } = this.props;
        const { data } = this.state;

        return (
            <ListComponent
                data={data}
                open={open}
                onSearch={this.onSearch}
                onSearchEnter={this.onSearch}
                onClick={
                    siteId => chayns.openUrlInBrowser(
                        `${txtList.txt_chaynsLink}${siteId}`
                    )
                }
                dataGroup={dataGroup}
                onClose={onClose}
            />
        );
    }
}

List.propTypes = {
    open: PropTypes.bool.isRequired,
    fetchLinkStart: PropTypes.string.isRequired,
    fetchLinkEnd: PropTypes.string.isRequired,
    dataGroup: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default List;
