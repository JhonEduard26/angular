export interface Product {
  description: string
  price: number
}

const phone: Product = {
  description: "iPhone 8",
  price: 350
}

const tablet: Product = {
  description: "iPad air",
  price: 500
}

interface TaxCalculationOptions {
  tax: number
  products: Product[]
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {

  const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => total += price)

  return [total, total * tax]
}


// const shoppingCart = [phone, tablet]
// const tax = 0.15

// const [productsTotal, taxTotal] = taxCalculation({ tax, products: shoppingCart })

// console.log({
//   valorArticulos: productsTotal,
//   valorImpuestos: taxTotal,
//   total: productsTotal + taxTotal
// });