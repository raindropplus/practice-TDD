const D_PRICE = 15;
const C_PRICE = 20;
const B_PRICE = 30;
const A_PRICE = 50;

export function checkout(items: string) {
  let total = 0;

  for (let item of items.split('')) {
    if (item === 'D') total += D_PRICE;
    else if (item === 'C') total += C_PRICE;
    else if (item === 'B') total += B_PRICE;
    else if (item === 'A') total += A_PRICE;
    else throw new Error('Unknown item');
  }

  return total;
}
