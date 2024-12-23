import { lazy, type LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazylayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: lazylayout,
    name: "lazylazyout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no lazy",
  },
];