export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Address = {
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Users = User[];

export type Post = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

export type Posts = Post[];

export type Project = {
  id: string;
  userId: number;
  title: string;
  time: number;
};

export type Projects = Project[];
