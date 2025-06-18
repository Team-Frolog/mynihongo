type ThemeStatus = 'learning' | 'quiz' | 'conversation' | 'completed';

export interface UserInfo {
  uid: string;
  createdAt: string;
  updatedAt: string;
  visitedDate: {
    lastDate: string;
    totalVisited: number;
  };
  themeStatus: {
    themeId: string;
    status: ThemeStatus;
    words: string[];
  }[];
}
