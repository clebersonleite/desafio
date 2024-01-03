interface IProductsColors {
  colorId: number;
  colorCode: string;
}

export interface IProductsGlobal {
  productId: number;
  productImageUrl: string;
  productPrice: number;
  productTitle: string;
  productExcerpt: string;
  productUrl: string;
  productColors: IProductsColors[];
}
