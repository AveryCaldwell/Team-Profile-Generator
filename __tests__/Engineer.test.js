// Import the Engineer Class
const Engineer = require('../lib/Engineer');
describe('Engineer', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Engineer Name';
            const id = '45';
            const email = 'waffles@waffles.com';
            const github = 'githubusername';

            // Act
            const obj = new Engineer(name, id, email, github);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getGithub()).toEqual(github);
        });

        // Exception test
        it("should throw an error if not provided a 'name' value", () => {
            // Arrange
            const cb = () => new Engineer();
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'id' value", () => {
            // Arrange
            const cb = () => new Engineer('name');
            const err = new Error(
                "Expected parameter 'id' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'email' value", () => {
            // Arrange
            const cb = () => new Engineer('name', 'id');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'github' value", () => {
            // Arrange
            const cb = () => new Engineer('name', 'id', 'email');
            const err = new Error(
                "Expected parameter 'github' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});
