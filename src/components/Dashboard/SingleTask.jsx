import PropTypes from 'prop-types';
import { TbClockShare } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import TaskIcon from './TaskIcon';
import { useParams, useNavigate } from "react-router-dom";
import { findProjectByTaskID } from '../../features/dashboard/dashboardUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setComplete, deleteTask } from '../../features/dashboard/dashboardSlice';


const SingleTask = ({ id: taskId, taskName, taskDescription, complete }) => {
    const { data } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const project = useParams().projectId || findProjectByTaskID(data, taskId).id;

    // * handlers
    function handleComplete() {
        dispatch(setComplete({ projectId: project, taskId }));
    }

    function handleDelete() {
        dispatch(deleteTask({ projectId: project, taskId }));
    }

    function goToEdit() {
        return navigate(`/dashboard/${project}/${taskId}`);
    }

    // * test function
    function test() {
        console.log('test');
    }



    return (
        <div className={`flex gap-2 justify-between px-2 py-1 tracking-wide border rounded-md  shadow-md  ${complete ? "bg-slate-500 border-slate-800 text-slate-300" : "bg-slate-200 border-slate-300"}`}>
            <div className='flex gap-1'>
                <TaskIcon icon={<FaRegCheckCircle />} color='#50DD3E' handleFunction={handleComplete} />
                <TaskIcon icon={<TbClockShare />} color='#70D6FF' handleFunction={test} />
            </div>
            <h3 className='text-base'>{taskName}</h3>
            <p className='self-center text-sm'>{taskDescription}</p>
            <div className='flex gap-1'>
                <TaskIcon icon={<FaEdit />} color='#E1CE26' handleFunction={goToEdit} />
                <TaskIcon icon={<MdDeleteOutline />} color='#ce1b1b' handleFunction={handleDelete} />
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