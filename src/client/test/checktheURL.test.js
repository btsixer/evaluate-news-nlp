const { checktheURL } = require('../js/checktheURL');

test('Validate URL', () => {
  expect(checktheURL('https://en.wikipedia.org/wiki/Main_Page')).toBe('');
});

//
// const can = {
//   name: 'pamplemousse',
//   ounces: 12,
// };
//
// describe('the can', () => {
//   test('has 12 ounces', () => {
//     expect(can.ounces).toBe(12);
//   });
//
//   test('has a sophisticated name', () => {
//     expect(can.name).toBe('pamplemousse');
//   });
// });
