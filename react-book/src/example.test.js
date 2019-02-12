test('测试相等', () => {
  expect(2 + 2).toBe(4)
})

test('测试不相等', () => {
  expect(2 + 2).not.toBe(3)
})

test('true ro false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('is number?',()=> {
  expect(4).toBeGreaterThan(3) // 测试 4 大于 3
  expect(4).toBeLessThan(5) // 测试4 小于 5
})

test('测试对象的相等',()=> {
  // expect({name: 'docker'}).toBe({name: 'docker'}) // 因为toBe为比较Object.is 比较内存 所以报错了
  expect({name: 'docker'}).toEqual({name:'docker'})
})