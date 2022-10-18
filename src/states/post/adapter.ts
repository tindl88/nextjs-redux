import { createEntityAdapter } from "@reduxjs/toolkit";
import { IPost } from "../../models/post";

const entityAdapter = createEntityAdapter<IPost>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export default entityAdapter;
