import PropTypes from 'prop-types';
import { TbClockShare } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import TaskIcon from './TaskIcon';


const SingleTask = ({ id, taskName, taskDescription, complete }) => {
    // TODO: Add a EditTask component for the edit button con el id
    console.log(id);

    function test() {
        console.log('test');
    }

    return (
        <div className={`flex gap-2 justify-between px-2 py-1 tracking-wide border rounded-md  shadow-md  ${complete ? "bg-slate-500 border-slate-800 text-slate-300" : "bg-slate-200 border-slate-300"}`}>
            <div className='flex gap-1'>
                <TaskIcon icon={<FaRegCheckCircle />} color='#50DD3E' handleFunction={test} />
                <TaskIcon icon={<TbClockShare />} color='#70D6FF' handleFunction={test} />
            </div>
            <h3 className='text-base'>{taskName}</h3>
            <p className='self-center text-sm'>{taskDescription}</p>
            <div className='flex gap-1'>
                <TaskIcon icon={<FaEdit />} color='#E1CE26' handleFunction={test} />
                <TaskIcon icon={<MdDeleteOutline />} color='#ce1b1b' handleFunction={test} />

            </div>
        </div>
    )
}

SingleTask.propTypes = {
    id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
}

export default SingleTask