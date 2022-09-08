import {S, R} from '@mobily/ts-belt';
const toFirstName = (input: string) => R.fromPredicate(input, S.isNotEmpty, 'Enter your first name');
