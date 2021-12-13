import { ReactElement } from "react";
import dynamic from "next/dynamic";
const List = dynamic(() => import("./components/organisms/List"), {
  ssr: false,
});
const Home = (): ReactElement => {
  return <List />;
};

export default Home;
