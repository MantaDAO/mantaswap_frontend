export const findTokenByDenom = (denom: string, data: any) => {
  for (const token of data) {
    if (token.denom === denom) {
      return token;
    }
  }
  return null;
};
