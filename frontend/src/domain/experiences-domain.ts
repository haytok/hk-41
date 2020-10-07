export interface Experience {
  key: string;
  date: string;
  iconStyle?: any;
  title: string | JSX.Element;
  body?: string | JSX.Element;
}

export interface Experiences {
  key: string;
  value: string;
  data: Array<Experience>;
}
