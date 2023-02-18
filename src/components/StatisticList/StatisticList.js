import { Statistic } from "components/Statistics/Statistic";

export const StatisticList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <li key={item.id}> 
        <Statistic item={item}/>
        </li>
      ))}
    </div>
  );
};
