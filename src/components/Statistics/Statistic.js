
import PropTypes from 'prop-types';

export const Statistics = ({ item }) => {
  return (
    <div
      style={{
        backgroundColor: getRandomHexColor(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '80px',
        flexDirection: 'column',
      }}
    >
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </div>
  );
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes=PropTypes.arrayOf(PropTypes.shape(
        {id:PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.string.isRequired })).isRequired

    