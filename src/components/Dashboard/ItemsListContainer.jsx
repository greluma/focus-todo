import PropTypes from 'prop-types';

const ItemsListContainer = ({ list }) => {
    return (
        <div>{list}</div>
    )
}

ItemsListContainer.propTypes = {
    list: PropTypes.array.isRequired
};



export default ItemsListContainer