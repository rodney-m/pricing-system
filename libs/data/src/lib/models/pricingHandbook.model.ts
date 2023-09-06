export interface PricingHandBookModel {
  id?: number | string;
  productOfferingId: number;
  institutionId: number;
  minPriceZWL: number;
  percentagePriceZWL: number;
  maxPriceZWL: number;
  minPriceUSD: number;
  percentagePriceUSD: number;
  maxPriceUSD: number;
}
