
import type { ReactNode, LazyExoticComponent, JSX } from 'react';

export interface AppRoute {
  path: string;
  element: ReactNode;
  name: string;
  children?: AppRoute[];
}

export interface AppRouteLazy {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  name: string;
  children?: AppRouteLazy[];
}