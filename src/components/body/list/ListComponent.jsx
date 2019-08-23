import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List, ListItem } from 'chayns-components';
import TextItem from './TextItem';
import txtList from './txtList';

function ListComponent(props) {
    const {
 data, open, onSearch, onClick, dataGroup, onClose
} = props;

    let itemKey = 0;
    const listItems = data.map((item) => {
        itemKey += 1;

        return (
            <ListItem
                key={`${item.siteId}-${itemKey}`}
                title={
                    item.appstoreName === ''
                        ? txtList.txt_noName
                        : item.appstoreName
                }
                subtitle={<a onClick={() => chayns.openUrlInBrowser(`https://www.facebook.com/${item.facebookId}`)}>Facebook</a>}
                image={`${txtList.txt_siteImage}${item.siteId}`}
                onClick={() => onClick(item.siteId)}
            />
        );
    });

    return (
        <Accordion
            head={txtList.txt_title}
            open={open}
            onSearch={onSearch}
            onSearchEnter={onSearch}
            searchPlaceholder={txtList.txt_search}
            dataGroup={dataGroup}
            onClose={onClose}
        >
            <List>
                {listItems.length === 0 ? (
                    <TextItem text={txtList.txt_noElement} />
                ) : (
                    listItems
                )}
            </List>
        </Accordion>
    );
}

ListComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    dataGroup: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ListComponent;
