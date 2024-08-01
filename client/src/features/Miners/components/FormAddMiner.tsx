/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { minerAdd } from '../minersSlice';
import { RootState, useAppDispatch } from '../../../store/store';
import '../styles/form.css';
import { useSelector } from 'react-redux';

const FormAddMiner = (): JSX.Element => {
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState<FileList | null | undefined>(null);
  const [expense, setExpense] = useState('');
  const [brand, setBrand] = useState('');
  const [subBrand, setSubBrand] = useState('');
  const [model, setModel] = useState('');
  const [algorithms, setAlgorithms] = useState('');
  const [currencies, setCurrencies] = useState('');
  const [hashrates, setHashrates] = useState('');

  // const user = useSelector((store: RootState) => store.auth.user);
  // const brands = useSelector((store: RootState) => store.brands.brands);
  // const subbrands = useSelector((store: RootState) => store.subbrands.subbrands);
  // const modells = useSelector((store: RootState) => store.modells.modells);
  // const hashrates = useSelector((store: RootState) => store.hashrates.hashrates);
  // const currencies = useSelector((store: RootState) => store.currencies.currencies);
  // const algorithms = useSelector((store: RootState) => store.algorithms.algorithms);
 

  const dispatch = useAppDispatch();

  const minerAddFetch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const imgFile = media?.[0];
    const formData = new FormData();
    let minerFileData = {
      price: price,
      description: description,
      expense: expense,
      brand: brand,
      sub_brands: subBrand,
      model: model,
      algorithms: algorithms,
      currencies: currencies,
      hashrates: hashrates,
    };

    formData.append('files.file', imgFile !== null && imgFile !== undefined ? imgFile : '');
    formData.append('data', JSON.stringify(minerFileData));
    dispatch(minerAdd(formData)).catch(console.log);
    setPrice('');
    setDescription('');
    setMedia(null);
    setExpense('');
    setBrand('');
    setSubBrand('');
    setModel('');
    setAlgorithms('');
    setCurrencies('');
    setHashrates('');
    // window.scrollTo(0, 0);
  };


  useEffect(() => {
    if (brands.length > 0) {
      setBrand(brands[0]); // Установить первый бренд как выбранный
    }
    if (models.length > 0) {
      setModel(models[0]); // Установить первую модель как выбранную
    }
    if (subbrands.length > 0) {
      setSubBrand(subbrands[0]); // Установить первый суббренд как выбранный
    }
    if (algorithmsList.length > 0) {
      setAlgorithms(algorithmsList[0]); // Установить первый алгоритм как выбранный
    }
    if (currenciesList.length > 0) {
      setCurrencies(currenciesList[0]); // Установить первую валюту как выбранную
    }
    if (hashratesList.length > 0) {
      setHashrates(hashratesList[0]); // Установить первый хэшрейт как выбранный
    }
  }, [brands, models, algorithmsList, currenciesList, hashratesList]);
 

  return (
    <div className="add__form__container">
      <div className="form-add-miner">
        <form className="add__form" onSubmit={minerAddFetch}>
          <input
            className="input-order"
            value={price}
            placeholder="цена"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="input-order"
            value={description}
            placeholder="описание"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>
            Фото
            <input
              className="input-order"
              type="file"
              placeholder="img"
              onChange={(e) => setMedia(e.target.files)}
            />
          </label>
          <input
            className="input-order"
            value={expense}
            placeholder="Расход"
            onChange={(e) => setExpense(e.target.value)}
          />
          <select 
            className="input-order" 
            value={brand} 
            onChange={(e) => setBrand(e.target.value)}>
              {brands.map((option:any) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select>
          <select
            className="input-order"
            value={subBrand}
            onChange={(e) => setSubBrand(e.target.value)}
          >
            {subbrands.map((option: any) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <select 
            className="input-order" 
            value={model} 
            onChange={(e) => setModel(e.target.value)}>
            {models.map((option: any) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <select
            className="input-order"
            value={algorithms}
            onChange={(e) => setAlgorithms(e.target.value)}
          >
            {algorithmsList.map((option: any) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <select
            className="input-order"
            value={currencies}
            onChange={(e) => setCurrencies(e.target.value)}
          >
            {currenciesList.map((option: any) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <select
            className="input-order"
            value={hashrates}
            onChange={(e) => setHashrates(e.target.value)}
          >
            {hashratesList.map((option: any) => (
              <option key={option.id} value={option.name}>
                {option.name} th/s
              </option>
            ))}
          </select>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default FormAddMiner;
