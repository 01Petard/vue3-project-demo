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

export interface MyFormData {
  input: string
  number: number
  select: string
  virtualSelect: string
  date: string
  datetime: string
  cascader: string[]
  checkbox: string[]
  radio: string
  color: string
  tags: string[]
  slider: number
  rate: number
  switch: boolean
  time: string
}