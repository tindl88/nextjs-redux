import { RootState } from "../store";
import adapter from "./adapter";

export const selectors = adapter.getSelectors();

export const getPosts = (state: RootState) => state.posts;
