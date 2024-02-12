import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

const ItemsListContainer = ({ list }) => {
    return <ul className='grid justify-center gap-2 m-2'>
        {list.map((task, index) => {
            const numeration = index + 1;
            const { id, taskName, taskDescription, complete } = task;
            const taskProps = { taskName, taskDescription, complete, numeration };
            return <li key={id}>
                <SingleTask {...taskProps} />
            </li>
        })}
    </ul>

}

ItemsListContainer.propTypes = {
    list: PropTypes.array.isRequired
};



export default ItemsListContainer