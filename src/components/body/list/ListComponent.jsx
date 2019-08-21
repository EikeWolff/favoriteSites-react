import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List, ListItem } from 'chayns-components';
import txt from './txtList';

function ListComponent(props) {
    const { data, open, onSearchEnter } = props;
    const listItems = data.map(item => (
        <ListItem
            key={item.siteId}
            title={
                item.appstoreName === '' ? txt.txt_noName : item.appstoreName
            }
            subtitle={item.siteId}
            image={`${txt.txt_siteImage}${item.siteId}`}
        />
    ));

    return (
        <Accordion
            head={txt.txt_title}
            open={open}
            onSearchEnter={onSearchEnter}
            searchPlaceholder={txt.txt_search}
            defaultOpen
        >
            <List>{listItems}</List>
        </Accordion>
    );
}

ListComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    onSearchEnter: PropTypes.func.isRequired
};

export default ListComponent;
