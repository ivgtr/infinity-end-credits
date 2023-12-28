import { fakerJA } from "@faker-js/faker";

export const generateNames = (count: number) => {
  return fakerJA.helpers
    .multiple(
      () => ({
        name: fakerJA.person.fullName(),
      }),
      {
        count,
      }
    )
    .map((person) => person.name);
};

export const generateId = () => {
  return Math.floor(Math.random() * 100000);
};

export const generateTitle = () => {
  return fakerJA.commerce.productName();
};
