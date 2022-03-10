// --SET--
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
