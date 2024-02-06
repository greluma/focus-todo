import PropTypes from 'prop-types';

const HeadingsClockBanner = ({ text }) => {
    return (
        <div className='relative p-4 md:p-8 bg-slate-800 rounded-xl'>
            <h3 className='relative z-10 inline-block text-6xl scale-x-110 md:scale-x-125 md:text-9xl'>{text}</h3>
            <div className="absolute left-0 z-10 w-full h-0.5 bg-black top-1/2"></div>
        </div>
    )
}


HeadingsClockBanner.propTypes = {
    text: PropTypes.string.isRequired
}

export default HeadingsClockBanner