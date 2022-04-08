export const investFundDenomination = async (
  fundAddress,
  investor,
  provider,
  amount
) => {
  provider = getProvider(provider);
  const signer = await provider.getSigner();
  const { comptrollerContract } = await getContracts(fundAddress, provider);

  const receipt = await comptrollerContract.buyShares(
    [investor],
    [amount],
    [1]
  );

  await receipt.wait();
};

export const getDenominationBalance = async (
  fundAddress,
  investor,
  provider
) => {
  provider = getProvider(provider);
  const signer = await provider.getSigner();

  const { assetContract } = await getContracts(fundAddress, provider);

  const balance = await assetContract.balanceOf(investor);

  return balance;
};

export const redeemAllShares = async (fundAddress, provider) => {
  provider = getProvider(provider);
  const signer = await provider.getSigner();

  const { comptrollerContract } = await getContracts(fundAddress, provider);

  const receipt = await comptrollerContract.redeemShares();
  await receipt.wait();
};
