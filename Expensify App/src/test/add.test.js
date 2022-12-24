const generateGreeting = (name) => `Hello! My name is ${name}`

test('should greeting with your name', () => {
    const result = generateGreeting('Long')
    expect(result).toBe('Hello! My name is Long')
})