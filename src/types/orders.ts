export interface IOrders {
  id: string;
  orderId: string;
  amount: string;
  reference: string;
  productName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

export type DtoRegisterOrderType = {
  productId: string;
  amount: string;
  address: string;
}