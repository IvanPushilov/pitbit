/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { User } from '../Auth/type';

export type Miner = {
  id: number;
  description: string;
  price: number;
  expense: number;
  modell_id: number;
  brand_id: number;
  subbrand_id: number;
  img: string;
  algorithm_id: number;
  currency_id: number;
  hashrate_id: number;
  algorithms_id: number;
  };

export type Brand = {
  id: number;
  name: string;
};

export type Currency ={
  id: number;
  name: string;
};
export type Hashrate = {
  id: number;
  rate: number;
};
export type Modell = {
  id: number;
  name: string;
  subbrand_id: number;
  brand_id: number;
};

export type SubBrand = {
  id: number;
  name: string;
  brand_id: number;
};

export type Algorithm = {
  id: number;
  algo: string;
};

export type Comment = {
  id:number;
  user_id:number;
  title: string;
  miner_id: number;
  date:string;
  User:User;
};

export type CommentFetch = {
  title: string;
  miner_id: number;
};


export type CommentsState = {
  comment: Comment[],
  message: string | undefined
};

export type MinerState = {
  miners: Miner[];
  message: string | undefined;
};

export type BrandState = {
  brands: Brand[];
  brand: Brand | null;
  message: string | undefined;
};

export type CurrencyState = {
  currencies: Currency[];
  currency: Currency | null;
  message: string | undefined;
};

export type HashrateState = {
  hashrates: Hashrate[];
  hashrate: Hashrate | null;
  message: string | undefined;
};

export type ModellState = {
  modells: Modell[];
  modell: Modell | null;
  message: string | undefined;
};

export type SubBrandState = {
  subbrands: SubBrand[];
  subbrand: SubBrand | null;
  message: string | undefined;
};

export type AlgorithmState = {
  algorithms: Algorithm[];
  algorithm: Algorithm | null;
  message: string | undefined;
};



export type MinerItemId = Miner['id'];
