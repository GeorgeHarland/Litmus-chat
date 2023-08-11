export type FriendListType = {
  FriendName: string;
  Status: string;
};

export type RegisterFormData = {
  Username: string;
  Email: string;
  Password: string;
  Day: number;
  Month: number;
  Year: number;
};

export type LoginFormData = {
  Email: string;
  Password: string;
};

export type MessageType = {
  owner: string;
  message: string;
};
