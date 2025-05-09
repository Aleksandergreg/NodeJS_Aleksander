import db from './connection.js'

const deleteDiscipline = await db.disciplines.deleteOne({name: "Boxing"});

console.log(deleteDiscipline);