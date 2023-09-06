'use client';

import InputWrap from '../components/forms/InputWrap';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import VaultCard from './components/VaultCard';
import useTokenStore from '@/store/tokenStore';
import React, { useState } from 'react'; // Import React and useState

const VaultsComponent = () => {
  const { vaults, allTokens } = useTokenStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToken, setSelectedToken] = useState(''); // State for the selected token

  // Function to handle search input change
  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle select change
  const handleSelectChange = (e: any) => {
    setSelectedToken(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedToken('');
  };

  // Filtered vaults based on search and selected token
  const filteredVaults = vaults.filter((vault: any) => {
    const nameMatch =
      vault.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vault.code.toLowerCase().includes(searchQuery.toLowerCase()); // Check if name or code contains searchQuery
    const tokenMatch =
      selectedToken === '' || vault.name.toLowerCase().includes(selectedToken.toLowerCase()); // Check if vault name partially matches selectedToken
    return nameMatch && tokenMatch;
  });

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center justify-center container">
        <InputWrap className="w-full sm:w-auto min-w-[350px]">
          <MagnifyingGlassIcon className="w-4" />
          <input
            type="text"
            placeholder="Search vaults"
            className="h-[47px]"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </InputWrap>
        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
          <InputWrap>
            <select
              name="Coin 1"
              id="coin-1"
              className="h-[47px] w-full"
              value={selectedToken}
              onChange={handleSelectChange}
            >
              <option value="">Select a coin</option>
              {allTokens.map((token: any) => (
                <option
                  key={token.ticker}
                  value={token.ticker}
                >
                  {token.ticker}
                </option>
              ))}
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

        {(selectedToken !== '' || searchQuery !== '') && (
          <button
            onClick={clearSearch}
            className="text-sm"
          >
            Clear Search
          </button>
        )}
      </div>
      <div className="container">
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-[18px] w-full">
          {filteredVaults.map((vault: any, index: number) => (
            <VaultCard
              key={index}
              vault={vault}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VaultsComponent;
