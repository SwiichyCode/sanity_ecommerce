export interface ContactType {
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  socials: {
    name: string;
    url: string;
  }[];
}
