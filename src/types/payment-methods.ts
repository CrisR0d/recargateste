export interface IPaymentMethods {
  id: string;
  paymentType: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  paymentName: string;
}

export type DtoRegisterPaymentMethods = Omit<IPaymentMethods, "id" | "createdAt" | "updatedAt">;
export type DtoUpdatePaymentMethods = Partial<IPaymentMethods>;
