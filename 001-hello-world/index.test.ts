// Comparing Strings
test('hello world should equal hello world', () => {
	expect("hello world").toBe("hello world");
});

// Compare numbers
test('10 + 5 should equal 15', () => {
	expect(10 + 5).toBe(15);
})

// Compare numbers to not equal
test('10 + 4 should not equal 15', () => {
	expect(10 + 4).not.toBe(15);
})

// Compare arrays
test("[1, 2, 3] should equal [1,2,3]", () => {
	expect([1, 2, 3]).toEqual([1, 2, 3])
})

// Compare arrays to not equal
test("[1, 2, 3] should not equal [1,2,3,4]", () => {
	expect([1, 2, 3]).not.toEqual([1, 2, 3,4])
})

// Compare objects
test("{ message: 'hello' } should equal { message: 'hello' }", () => {
	expect([1, 2, 3]).toEqual([1, 2, 3])
})

// Compare objects to not equal
test("{ message: 'hello' } should not equal { message: 'goodbye' }", () => {
	expect({ message: 'hello' }).not.toEqual({ message: 'goodbye' })
})


