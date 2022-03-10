// SET - data structure for managing unique values as it does not allow duplicate values in the set
const ids = new Set([1, 2, 3])

console.log('has', ids.has(1))

console.log('add', ids.add(6))

console.log('entries', ids.entries())
for (const id of ids.entries()) {
  console.log('entry', id)
}

console.log('keys', ids.keys)
for (const id of ids.keys()) {
  console.log('key', id)
}

console.log('delete', ids.delete(10))
console.log('delete', ids.delete(6))
console.log(ids)

// MAP
// can use any values and types as keys
const person1 = { name: 'name1' }
const person2 = { name: 'name2' }

const personData = new Map([[person1, [{ status: 'actve', points: 10 }]]])
console.log('get by key', personData.get(person1))
personData.set([person2, [{ status: 'actve', points: 20 }]])
console.log(personData)

for (const entry of personData.entries()) {
  console.log('map entry', entry)
}
