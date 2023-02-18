import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';

import { StatisticList } from './StatisticList/StatisticList';
import { FriendList } from './Friends/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Layout } from './Layout';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />

      <GlobalStyle />
    </Layout>
  );
};

// import { RecipeList } from './RecipeList/RecipeList';
// import recipes from '../recipes.json';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';

// export const App = () => {
//   return (
//     <Layout>
//       <RecipeList items={recipes} />
//       <GlobalStyle />
//     </Layout>
//   );
// };
