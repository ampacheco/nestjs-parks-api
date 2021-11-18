export interface Park {
  id: string;
  name: string;
  description: string;
  state: StatesEnum;
}

export enum StatesEnum {
  FL = 'Florida',
  AZ = 'Arizona',
  WA = 'Whashington',
  VA = 'Virgina',
}
