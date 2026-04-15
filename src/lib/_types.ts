import { ReactNode } from "react";

export interface Qata {
  id: number;
  content: string;
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  timestamp: Date;
  loves: number;
  quotes: number;
  shares: number;
  imageUrl?: string;
}

export interface QataFeed {
  qatas: Qata[];
}

export type LinkType = {
  href: string;
  children: ReactNode;
};

export type ArchiveLayoutProps = {
  archive: ReactNode;
  latest: ReactNode;
};

export type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};
