// import { CHAINS } from '@/config/staging/chains';
// import { TOKENS, PLATFORM_TOKENS } from '@/config/staging/tokens';

import { atom } from 'jotai';

// Active chain
export const currentChainIdAtom = atom('kujira');
export const demoSignedIn = atom(false);
export const identifierFromAtom = atom('from');
export const identifierToAtom = atom('to');
