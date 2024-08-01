import React from 'react';
import MinerItem from './MinerItem';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
// import FormAddMiner from '../../Miners/components/FormAddMiner';
import '../styles/mineritem.css';


function MinersPage(): JSX.Element {
  // const user = useSelector((store: RootState) => store.auth.user);
  const miners = useSelector((store: RootState) => store.miners.miners);
  const brands = useSelector((store: RootState) => store.brands.brands);
console.log('miners', miners, 'brands',brands);

  return (
    <div className="minerspage">
      {/* <div>{user?.role === 'admin' ? <div><h2>Добавить майнер</h2>  <FormAddMiner/></div> : null}</div> */}
        {miners.map((miner) => (
            <MinerItem key={miner.id} miner={miner} />
       ))}
    </div>
  );
}

export default MinersPage;
