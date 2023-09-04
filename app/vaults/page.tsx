import InputWrap from '../components/forms/InputWrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import VaultCard from './components/VaultCard';

export default function Vaults() {
  return (
    <div className="flex flex-col gap-5">
      <div className="header w-full text-center">
        <h1>Vaults</h1>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center container">
        <InputWrap className="w-full sm:w-auto min-w-[350px]">
          <MagnifyingGlassIcon className="w-4" />
          <input
            type="text"
            placeholder="Search vaults"
            className="h-[47px]"
          />
        </InputWrap>
        <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
          <InputWrap>
            <select
              name="Coin 1"
              id="coin-1"
              className="h-[47px] w-full"
            >
              <option value="Coin 1">Coin 1</option>
              <option value="Coin 2">Coin 2</option>
              <option value="Coin 3">Coin 3</option>
            </select>
          </InputWrap>
          <InputWrap>
            <select
              name="Type 1"
              id="type-1"
              className="h-[47px] w-full"
            >
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
            </select>
          </InputWrap>
          <InputWrap>
            <input
              type="checkbox"
              id="pools"
              name="pools"
              value="My pools"
            />{' '}
            <label htmlFor="pools">My pools</label>
          </InputWrap>
        </div>
      </div>
      <div className="container">
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-[18px] w-full">
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
          <VaultCard />
        </div>
      </div>
    </div>
  );
}
