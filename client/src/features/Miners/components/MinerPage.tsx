import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { minerDel } from '../minersSlice';
import '../styles/mineritem.css';

function MinerPage(): JSX.Element {
  const { minerId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedMiner = useSelector((store: RootState) =>
    store.miners.miners.find((miner) => miner.id === Number(minerId)),
  );
  const user = useSelector((store: RootState) => store.auth.user);
  const brands = useSelector((store: RootState) => store.brands.brands);
  const subbrands = useSelector((store: RootState) => store.subbrands.subbrands);
  const modells = useSelector((store: RootState) => store.modells.modells);
  const hashrates = useSelector((store: RootState) => store.hashrates.hashrates);
  const currencies = useSelector((store: RootState) => store.currencies.currencies);
  const algorithms = useSelector((store: RootState) => store.algorithms.algorithms);

  


  const currentBrand = brands.find((brand) => brand.id === selectedMiner?.brand_id);
  const currentSubBrand = subbrands.find((subbrand) => subbrand.id === selectedMiner?.subbrand_id);
  const currentModell = modells.find((modell) => modell.id === selectedMiner?.modell_id);
  const currentHashrate = hashrates.find((hashrate) => hashrate.id === selectedMiner?.hashrate_id);
  const currentCurrency = currencies.find((currency) => currency.id === selectedMiner?.currency_id);
  const currentAlgorithm = algorithms.find((algorithm) => algorithm.id === selectedMiner?.algorithm_id);

  if (!selectedMiner) {
    return <div>Карточка не найдена</div>;
  }
 

  const minerDelete = (): void => {
    dispatch(minerDel(selectedMiner?.id)).catch(console.log);
    navigate('/miners');
  };

  const handleHashrateChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedHashrate = event.target.value;
    console.log('Selected hashrate:', selectedHashrate);
  };

  return (
    <div className="container-minercard-all">
      <div>
        <img
          className="img"
          src={selectedMiner.img}
          alt="img"
        />
      </div>
      <div className="minercard-info">
        <p className="info">
          {currentSubBrand?.name}{' '}
          {currentModell?.name}
        </p>
        <pre className="info brand-name">{currentBrand?.name}</pre>
      </div>

      <h3 className="characteristics-title">Характеристики</h3>
      <table className="characteristics-table">
        <tbody>
          <tr>
            <td className='pics' > <img className='imgs' src='../../../../public/algo.png'/>Алгоритм:</td>
            <td>{currentAlgorithm?.algo}</td>
          </tr>
          <tr>
            <td className='pics'> <img className='imgs' src='../../../../public/val.png'/>Криптовалюта:</td>
            <td>{currentCurrency?.name}</td>
          </tr>
          <tr>
            <td className='pics'> <img className='imgs' src='../../../../public/hash.png'/>Хешрейт:</td>
            <td>
              {/* <select onChange={handleHashrateChange}>
                {selectedMiner.attributes.hashrates.data.map((hashrate) => (
                  <option key={hashrate.id} value={hashrate.attributes.rate}>
                    {hashrate.attributes.rate} th/s
                  </option>
                ))} */}
              {/* </select> */}
              {currentHashrate?.rate}
            </td>
          </tr>
          <tr>
          
            <td className='pics'> <img className='imgs' src='../../../../public/exp.png'/>Потребление:</td>
            <td>{selectedMiner.expense} вт</td>
          </tr>
        </tbody>
      </table>

      <h3 className="description-title">Описание</h3>
      <p className="description">{selectedMiner.description}</p>

      <div className="price-container">
        <p className="price">
          {selectedMiner.price} руб
          <button className="buy-button" style={{ marginLeft: '10px' }}>
            Купить
          </button>
        </p>
      </div>
      {user?.role === 'admin' && (
        <button className="delete-button" onClick={minerDelete}>
          Удалить
        </button>
      )}
    </div>
  );
}

export default MinerPage;
