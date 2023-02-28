const mathOperations = require('./jest');

test('adds 2 and 3 to equal 5',() => {
    expect(mathOperations.sum(2,3)).toBe(5);
});



test('diff 5 and 3 to equal 2',() => {
    expect(mathOperations.diff(5,3)).toBe(2);
});

test('product of 5 and 3 to equal 15',() => {
    expect(mathOperations.product(5,3)).toBe(15);
});