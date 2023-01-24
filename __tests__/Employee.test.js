// Import the Employee Class
const Employee = require('../lib/Employee');
describe('Employee', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Employee Name';
            const id = '45';
            const email = 'waffles@waffles.com';

            // Act
            const obj = new Employee(name, id, email);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
        });

        // Exception test
        it("should throw an error if not provided a 'name' value", () => {
            // Arrange
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'id' value", () => {
            // Arrange
            const cb = () => new Employee('name');
            const err = new Error(
                "Expected parameter 'id' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'email' value", () => {
            // Arrange
            const cb = () => new Employee('name', 'id');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});
