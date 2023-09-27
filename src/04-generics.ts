import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

function sort<T>(sortArray: T[], criteria: (a: T, b: T) => number) : any {
    return sortArray.sort(criteria);
}

function overlap(
    friends: Friend[],
    colleagues: Colleague[]
  ): any[] {
    let outcome: any[] = [];
    friends.reduce((o, fr) => {
      const col = colleagues.find((c) => c.name === fr.name);
      if (col) {
        // overlap between colleages list and friend list
        outcome.push({
            name: col.name,
            age: fr.age,
            contact: {
                email: col.contact.email,
                extension: col.contact.extension
            }
        }
        );
      }
      return o;
    }, outcome);
    return outcome;
  }

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);