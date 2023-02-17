 import { GlobalStyle } from './GlobalStyle';
 import { Profile } from './Profile/Profile';
 import user from '../user.json'

export const App = () => {
  return (
    <div>
      <Profile item={user} />
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