import PropTypes from 'prop-types';
import HeadingsClockBanner from './HeadingsClockBanner';

const HeadingsContainerClockBanner = ({ time }) => {
    const [firstDigit, secondDigit] = time.toString().split('');
    if (!secondDigit) {
        return (
            <div className='flex gap-2 md:gap-4'>
                <HeadingsClockBanner text={"0"} />
                <HeadingsClockBanner text={firstDigit} />
            </div>
        )
    }
    return (
        <div className='flex gap-2 md:gap-4'>
            <HeadingsClockBanner text={firstDigit} />
            <HeadingsClockBanner text={secondDigit} />
        </div>
    )

}

HeadingsContainerClockBanner.propTypes = {
    time: PropTypes.number.isRequired
}

export default HeadingsContainerClockBanner