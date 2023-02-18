import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistic';
import { FriendList } from './Friends/FriendsList';


import { Layout } from './Layout';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'

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
      <Statistics title="Upload stats" items={data} />
      <FriendList items={friends}/>


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
