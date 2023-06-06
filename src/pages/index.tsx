import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const { data } = api.recipeRouter.getAll.useQuery();
  console.log(data);

  return (
    <div>Hello world!!!</div>
  );
};

export default Home;
