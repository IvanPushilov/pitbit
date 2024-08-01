/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Currency, Miner } from "./type";
import type { Brand } from "./type";
import type { Algorithm } from "./type";
export const minersLoadFetch = async (): Promise<Miner[]> => {
  const res = await fetch('/api/miners');
  const data = await res.json();
  return data.miners;
};

export const minerAddFetch = async (obj: FormData): Promise<Miner> => {
  try{
    const res = await fetch('/api/miners', {
      method: 'POST',
      body: obj
    });
    const data = await res.json();
    return data.miner;
  }catch (error) {
    throw error;
  }
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
    return data.brands;
  };
  export const algorithmIdFetch = async (id: string | undefined): Promise<Algorithm> => {
    const res = await fetch(`/api/algorithms/${id}`);
    const data = await res.json();
    return data.brand;
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

  