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

  if (!selectedMiner) {
    return <div>Карточка не найдена</div>;
  }
  console.log('store', selectedMiner);
 

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
          src={'http://localhost:1337' + selectedMiner.id}
          alt="img"
        />
      </div>
      <div className="minercard-info">
        <p className="info">
          {selectedMiner.id}{' '}
          {selectedMiner.id}
        </p>
        <pre className="info brand-name">{selectedMiner.id}</pre>
      </div>

      <h3 className="characteristics-title">Характеристики</h3>
      <table className="characteristics-table">
        <tbody>
          <tr>
            <td className='pics' > <img className='imgs' src='../../../../public/algo.png'/>Алгоритм:</td>
            <td>{selectedMiner.id}</td>
          </tr>
          <tr>
            <td className='pics'> <img className='imgs' src='../../../../public/val.png'/>Криптовалюта:</td>
            <td>{selectedMiner.id}</td>
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
              {selectedMiner.id}
            </td>
          </tr>
          <tr>
          
            <td className='pics'> <img className='imgs' src='../../../../public/exp.png'/>Потребление:</td>
            <td>{selectedMiner.id} вт</td>
          </tr>
        </tbody>
      </table>

      <h3 className="description-title">Описание</h3>
      <p className="description">{selectedMiner.id}</p>

      <div className="price-container">
        <p className="price">
          {selectedMiner.id} руб
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
