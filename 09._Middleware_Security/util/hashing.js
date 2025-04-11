//hashe og compare i bcrypt

import brycpt from 'bcryptjs';

const saltRounds = 14;
const password = "Hunter12";
const hashedPassword = "$2b$14$731gCkuvbP3nsbZkfWnPr.WbkEqwvs9HIV.YLeDiEWK1UjsLCfPEi";
//signup
const passwordHash = await brycpt.hash(password, saltRounds);

console.log(passwordHash);
//login
const isSame = await brycpt.compare(password, hashedPassword,);
console.log(isSame);

