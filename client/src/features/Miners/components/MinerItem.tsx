import React from 'react';
import { Link } from 'react-router-dom';
import type { Miner } from '../type';
import '../styles/mineritem.css';


function MinerItem({ miner }: { miner: Miner }): JSX.Element {
  console.log('miner', miner);
  

  return (
    <Link className="link-post" onClick={() => window.scrollTo(0, 0)} to={`/miners/${miner.id}`}>
      <div className="container-minercard">
        <div>
          <pre className="info brand-name">{miner.id}</pre>
          {/* <img
            className="img"
            src={miner.id}
            alt="img"
          /> */}
        </div>
        <div className="minercard-info">
          <p className="info">
            {miner.id}{' '}
            {miner.id} {miner.id}вт
          </p>
        </div>
        <td>
          Хешрейт:{' '}
          {miner.id}
          th/s
        </td>
        <p className="price">
          {miner.id} руб
        </p>
      </div>
    </Link>
  );
}

export default MinerItem;
