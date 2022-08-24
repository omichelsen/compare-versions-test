import { compareVersions, compare, satisfies, validate } from 'compare-versions'

console.log(compareVersions)

console.log(compareVersions('11.1.1', '10.0.0'), 1)
console.log(compareVersions('10.0.0', '10.0.0'), 0)
console.log(compareVersions('10.0.0', '11.1.1'), -1)

console.log(compare('10.1.8', '10.0.4', '>'), true)
console.log(compare('10.0.1', '10.0.1', '='), true)
console.log(compare('10.1.1', '10.2.2', '<'), true)
console.log(compare('10.1.1', '10.2.2', '<='), true)
console.log(compare('10.1.1', '10.2.2', '>='), false)

console.log(satisfies('10.0.1', '~10.0.0'), true)
console.log(satisfies('10.1.0', '~10.0.0'), false)
console.log(satisfies('10.1.2', '^10.0.0'), true)
console.log(satisfies('11.0.0', '^10.0.0'), false)
console.log(satisfies('10.1.8', '>10.0.4'), true)
console.log(satisfies('10.0.1', '=10.0.1'), true)
console.log(satisfies('10.1.1', '<10.2.2'), true)
console.log(satisfies('10.1.1', '<=10.2.2'), true)
console.log(satisfies('10.1.1', '>=10.2.2'), false)

console.log(validate('1.0.0-rc.1'), true)
console.log(validate('1.0-rc.1'), false)
console.log(validate('foo'), false)
