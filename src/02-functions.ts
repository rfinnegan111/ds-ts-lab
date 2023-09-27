import {Friend, Colleague, EmailContact } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(fr: Friend[], callback: (friend: any) => any) {
  var found = new Array()
  fr.forEach(f => {
      if(callback(f)) {
          found.push(f.name);
      }
  });
  return found; 
}