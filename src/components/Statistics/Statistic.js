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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
