import React from 'react';
import { Link } from 'react-router-dom';
import type { Miner } from '../type';
import '../styles/mineritem.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';


function MinerItem({ miner }: { miner: Miner }): JSX.Element {
  const brands = useSelector((store: RootState) => store.brands.brands);
  const subbrands = useSelector((store: RootState) => store.subbrands.subbrands);
  const modells = useSelector((store: RootState) => store.modells.modells);
  const hashrates = useSelector((store: RootState) => store.hashrates.hashrates);

  const brandId = miner.brand_id;
  const subbrandId = miner.subbrand_id;
  const modelId = miner.modell_id;
  const hashrateId = miner.hashrate_id;

  const currentBrand = brands.find((brand) => brand.id === brandId);
  const currentSubBrand = subbrands.find((subbrand) => subbrand.id === subbrandId);
  const currentModell = modells.find((modell) => modell.id === modelId);
  const currentHashrate = hashrates.find((hashrate) => hashrate.id === hashrateId);
  

  return (
    <Link className="link-post" onClick={() => window.scrollTo(0, 0)} to={`/miners/${miner.id}`}>
      <div className="container-minercard">
        <div>
          <pre className="info brand-name">{currentBrand?.name}</pre>
          <img
            className="img"
            src={miner.img}
            alt="img"
          />
        </div>
        <div className="minercard-info">
          <p className="info">
            {currentSubBrand?.name}{' '}
            {currentModell?.name} {miner.expense}вт
          </p>
        </div>
        <td>
          Хешрейт:{' '}
          {currentHashrate?.rate}
          th/s
        </td>
        <p className="price">
          {miner.price} руб
        </p>
      </div>
    </Link>
  );
}

export default MinerItem;
