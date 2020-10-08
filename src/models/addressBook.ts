export interface ResponseInformation {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Person {
  name: Name;
  phone: string;
}

export interface AddressBookResponse {
  info: ResponseInformation;
  results: Person;
}
