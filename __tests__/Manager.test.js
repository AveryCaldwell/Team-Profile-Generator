// Import the Manager Class
const Manager = require('../lib/Manager');
describe('Manager', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Manager Name';
            const id = '65';
            const email = 'waffles@waffles.com';
            const officeNumber = '405';

            // Act
            const obj = new Manager(name, id, email, officeNumber);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        });

        // Exception test
        it("should throw an error if not provided a 'name' value", () => {
            // Arrange
            const cb = () => new Manager();
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'id' value", () => {
            // Arrange
            const cb = () => new Manager('name');
            const err = new Error(
                "Expected parameter 'id' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'email' value", () => {
            // Arrange
            const cb = () => new Manager('name', 'id');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'officeNumber' value", () => {
            // Arrange
            const cb = () => new Manager('name', 'id', 'email');
            const err = new Error(
                "Expected parameter 'office number' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});
