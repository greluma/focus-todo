import PropTypes from 'prop-types';

const ClockTimeInfo = ({ time, unit }) => {
    if (unit === "min") {
        return (
            <div className="flex flex-col items-center justify-center gap-3">
                <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md min-w-14 text-center tracking-wider">
                    {time}
                </span>
                <span className="text-sm text-[#FBFAF8] font-bold">
                    {time == 1 ? "Minute" : "Minutes"}
                </span>
            </div>
        )
    }
    if (unit === "sec") {
        return (<div className="flex flex-col items-center justify-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md min-w-14 text-center tracking-wider">
                {time < 10 ? `0${time}` : time}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">
                {time <= 1 ? "Second" : "Seconds"}
            </span>
        </div>)
    }
}

ClockTimeInfo.propTypes = {
    time: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};


export default ClockTimeInfo