export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
