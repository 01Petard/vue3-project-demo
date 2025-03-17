export interface PersonInterface {
  name: string;
  age: number;
  phone: string;
}

export type Persons = Array<PersonInterface>;


export interface NewsInterface {
  id: string;
  title: string;
  content: string;
}