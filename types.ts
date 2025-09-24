// Fix: Import `ReactNode` type from 'react' to resolve `Cannot find namespace 'JSX'` error.
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}
