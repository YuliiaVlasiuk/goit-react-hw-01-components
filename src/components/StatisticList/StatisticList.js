import { Statistics } from "components/Statistics/Statistic";

export const StatisticList = ({ title, items }) => {
  return (

    <section className="statistics"
      style={{
        width: '401px',
        border: '1px solid grey',
        marginTop: '20px'
      }} >

      <h2 className="title">{title}</h2>

      <div style={{

        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '50px'
      }}>
        {items.map(item => (
          <li key={item.id}
            style={{
              listStyle: 'none',
            }}
          >
            <Statistics item={item} />
          </li>
        ))}
      </div>
    </section>
  );
};
