export interface Bank {
  id?: string;
  name: string;
  minPriceZWL: number;
  percentagePriceZWL: number;
  maxPriceZWL: number;
  minPriceUSD: number;
  percentagePriceUSD: number;
  maxPriceUSD: number;
}
