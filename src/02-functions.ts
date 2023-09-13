import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

/* function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}
 */
//console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current))


function addColleague(c: Colleague[], cName: string, dept: string, cEmail: string) {
    var currentHigh = highestExtension(colleagues.current)
    c.push({
      name: cName,
      department: dept,
      contact: {
        email: cEmail,
        extension: currentHigh.contact.extension + 1 
      }
    })
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function allOlder(fr: Friend[]) : String[] {
    const old = new Array();
    fr.forEach(f => {
        f.age += 1
        old.push (`${f.name} is now ${f.age}`) 
    })
    return old;
};


console.log(allOlder(friends))