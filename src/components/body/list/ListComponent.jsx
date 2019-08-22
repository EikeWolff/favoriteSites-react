import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List, ListItem } from 'chayns-components';
import txt from './txtList';

function ListComponent(props) {
    const {
        data, open, onSearchEnter, onClick, dataGroup, onClose
    } = props;
    const listItems = data.map(item => (
        <ListItem
            key={item.siteId}
            title={
                item.appstoreName === '' ? txt.txt_noName : item.appstoreName
            }
            subtitle={item.siteId}
            image={`${txt.txt_siteImage}${item.siteId}`}
            onClick={() => onClick(item.siteId)}
        />
    ));

    return (
        <Accordion
            head={txt.txt_title}
            open={open}
            onSearchEnter={onSearchEnter}
            searchPlaceholder={txt.txt_search}
            dataGroup={dataGroup}
            onClose={onClose}
        >
            <List>{listItems}</List>
        </Accordion>
    );
}

ListComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    onSearchEnter: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    dataGroup: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ListComponent;
