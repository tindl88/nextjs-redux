import { ReactElement, useEffect } from "react";

import LayoutDefault from "../layouts/default";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
