import { faker } from "@faker-js/faker";

const category = ["poisson", "nourriture", "matériel", "traitement"];

export function generateFakeProducts(count: number) {
  const products = [];

  for (let i = 0; i < count; i++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      stars: faker.datatype.number({ min: 0, max: 5 }),
      stock: faker.datatype.number({ min: 0, max: 100 }),
      price: faker.commerce.price(),
      images: faker.image.urlLoremFlickr({ category: "business" }),
      category: category[Math.floor(Math.random() * category.length)],
    };

    products.push(product);
  }

  return products;
}
