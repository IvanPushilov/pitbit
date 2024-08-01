/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Currency, Miner, Brand, Algorithm, Hashrate, SubBrand, Modell, } from "./type";

export const minersLoadFetch = async (): Promise<Miner[]> => {
  const res = await fetch('/api/miners');
  const data = await res.json();
  return data.miners;
};

export const minerAddFetch = async (obj: FormData): Promise<Miner> => {
    const res = await fetch('/api/miners', {
      method: 'POST',
      body: obj
    });
    const data = await res.json();
    return data.miner;
  };

  export const minerDelFetch = async (id: number): Promise<Miner> => {
    const res = await fetch(`/api/miners/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    return data.miner;
  };

  export const brandsLoadFetch = async (): Promise<Brand[]> => {
    const res = await fetch('/api/brands');
    const data = await res.json();
    return data.brands;
  };
  export const brandIdFetch = async (id: string | undefined): Promise<Brand> => {
    const res = await fetch(`/api/brands/${id}`);
    const data = await res.json();
    return data.brand;
  };

  export const algorithmsLoadFetch = async (): Promise<Algorithm[]> => {
    const res = await fetch('/api/algorithms');
    const data = await res.json();
    return data.algorithms;
  };
  export const algorithmIdFetch = async (id: string | undefined): Promise<Algorithm> => {
    const res = await fetch(`/api/algorithms/${id}`);
    const data = await res.json();
    return data.algorithm;
  };

  export const currenciesLoadFetch = async (): Promise<Currency[]> => {
    const res = await fetch('/api/currencies');
    const data = await res.json();
    return data.currencies;
  };
  export const currencyIdFetch = async (id: string | undefined): Promise<Currency> => {
    const res = await fetch(`/api/currencies/${id}`);
    const data = await res.json();
    return data.currency;
  };

  export const hashratesLoadFetch = async (): Promise<Hashrate[]> => {
    const res = await fetch('/api/hashrates');
    const data = await res.json();
    return data.hashrates;
  };
  export const hashrateIdFetch = async (id: string | undefined): Promise<Hashrate> => {
    const res = await fetch(`/api/currencies/${id}`);
    const data = await res.json();
    return data.hashrate;
  };

  export const modellsLoadFetch = async (): Promise<Modell[]> => {
    const res = await fetch('/api/modells');
    const data = await res.json();
    return data.modells;
  };
  export const modellIdFetch = async (id: string | undefined): Promise<Modell> => {
    const res = await fetch(`/api/modells/${id}`);
    const data = await res.json();
    return data.modell;
  };

  export const subbrandsLoadFetch = async (): Promise<SubBrand[]> => {
    const res = await fetch('/api/subbrands');
    const data = await res.json();
    return data.subbrands;
  };
  export const subbrandIdFetch = async (id: string | undefined): Promise<SubBrand> => {
    const res = await fetch(`/api/subbrands/${id}`);
    const data = await res.json();
    return data.subbrand;
  };

  