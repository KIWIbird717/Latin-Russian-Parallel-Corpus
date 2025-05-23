export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
};

export type BookWork = {
  id: string;
  title: string;
  description: string;
  author: Author;
  createdAt: Date;
};
