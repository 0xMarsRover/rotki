// Public suffixes list
// Source: https://github.com/lupomontero/psl/blob/main/data/rules.json
import psl from '@/data/psl.json';

export const pslSuffixes: Set<string> = new Set(psl.psl);
