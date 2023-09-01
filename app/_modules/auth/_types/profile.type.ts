export interface ProfileType {
  id: string;
  email?: string;
  firstname: string;
  lastname: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  zipcode: string;
}

export interface ProfileFormType {
  firstname: string;
  lastname: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  zipcode: string;
}
