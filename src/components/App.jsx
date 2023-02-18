 import { GlobalStyle } from './GlobalStyle';
 import { Profile } from './Profile/Profile';
 import { Statistics } from './Statistics/Statistic';

 import user from '../user.json';
 import data from '../data.json'



export const App = () => {
  return (
    <div
    style={{
      padding: "16px",
      display: 'block',
      textAlign:'center'
    }}>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
            />
<Statistics title="Upload stats" items={data}/>         
<GlobalStyle />
    </div>
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