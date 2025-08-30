export interface IProducts {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  offer: string;
  price: string;
  status: boolean;
}

export interface IOptions4Recharge {
  id: string;
  name: string;
  description: string;
  amount: number;
}

export type DtoRegisterProductType = Omit<IProducts, 'id' | 'status'>;
export type DtoUpdateProductType = Partial<IProducts>;
export type DtoDeleteProductType = Pick<IProducts, 'id'>;