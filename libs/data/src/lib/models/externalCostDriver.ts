export interface ExternalCostDriver {
  id?: string;
  condition: string;
  baseAmount: number;
  newAmount: number;
  basePrice: number;
  newPrice: number;
  comments: string;
}
