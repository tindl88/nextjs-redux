import { ReactElement } from "react";

import LayoutDefault from "../layouts/default";

export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
