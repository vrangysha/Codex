import type * as React from "react";

export type NavigateHandler = (
  path: string,
) => (event: React.MouseEvent<HTMLAnchorElement>) => void;
