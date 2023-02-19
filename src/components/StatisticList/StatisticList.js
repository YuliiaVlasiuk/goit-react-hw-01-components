import { Statistics } from 'components/Statistics/Statistic';

import { Statistic ,StatisticSection } from './StatisticList.styled';

export const StatisticList = ({ title, items }) => {
  return (
    < Statistic className="statistics"  >
      <h2 className="title">{title}</h2>
      <StatisticSection>
        {items.map(item => (
          <li
            key={item.id}
            style={{ listStyle: 'none', }}
          >
            <Statistics item={item} />
          </li>
        ))}
      </StatisticSection>
    </ Statistic>
  );
};
