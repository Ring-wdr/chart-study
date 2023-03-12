import { lazy, LazyExoticComponent } from "react";

const LinePage = lazy(() =>
  import("../app/index").then(({ LinePage }) => ({ default: LinePage }))
);
const BarPage = lazy(() =>
  import("../app/bar").then(({ BarPage }) => ({ default: BarPage }))
);

const ScatterPage = lazy(() =>
  import("../app/scatter").then(({ ScatterPage }) => ({ default: ScatterPage }))
);

export const routeArr: [
  number,
  string,
  LazyExoticComponent<() => JSX.Element>
][] = [
  [1, "/", LinePage],
  [2, "/bar", BarPage],
  [3, "/scatter", ScatterPage],
];
