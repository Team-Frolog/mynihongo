type ThemeStatus = 'not_started' | 'quiz' | 'conversation' | 'completed';

export interface UserInfo {
  uid: string;
  createdAt: string;
  updatedAt: string;
  visitedDate: {
    lastDate: string;
    totalVisited: number;
  };
  themeStatus: {
    [themeName: string]: {
      status: ThemeStatus;
      words: number;
    };
  }[];
}
