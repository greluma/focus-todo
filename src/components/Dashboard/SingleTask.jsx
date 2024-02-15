import PropTypes from 'prop-types';

const SingleTask = ({ id, taskName, taskDescription, complete, numeration }) => {
    return (
        <div className={`flex gap-1 px-2 py-1 tracking-wide border rounded-md ${complete ? "bg-slate-500 border-slate-800 text-slate-300" : "bg-slate-200 border-slate-300"} `}>
            <span className='self-center text-xs font-bold'>{numeration}</span>
            <h3 className='text-base'>{taskName}</h3>
            <p className='self-center text-sm'>{taskDescription}</p>
        </div>
    )
}

SingleTask.propTypes = {
    id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    numeration: PropTypes.number.isRequired
}

export default SingleTask