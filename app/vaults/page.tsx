import VaultsComponent from './Vaults';

export default function Vaults() {
  return (
    <div className="flex flex-col gap-5">
      <div className="header w-full text-center">
        <h1>Vaults</h1>
      </div>
      <VaultsComponent />
    </div>
  );
}
