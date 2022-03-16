const bmi = require('./index');

test('weight=80 , height=1.80 , will print "Normal"', () => {
  expect(bmi(80, 1.80)).toBe("Normal");
});
