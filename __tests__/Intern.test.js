// Import the Employee Class
const Intern = require('../lib/Intern');
describe('Intern', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Intern Name';
            const id = '45';
            const email = 'waffles@waffles.com';
            const school = 'University of Washington';

            // Act
            const obj = new Intern(name, id, email, school);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getSchool()).toEqual(school);
        });

        // Exception test
        it("should throw an error if not provided a 'name' value", () => {
            // Arrange
            const cb = () => new Intern();
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'id' value", () => {
            // Arrange
            const cb = () => new Intern('name');
            const err = new Error(
                "Expected parameter 'id' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'email' value", () => {
            // Arrange
            const cb = () => new Intern('name', 'id');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
        // Exception test
        it("should throw an error if not provided a 'school' value", () => {
            // Arrange
            const cb = () => new Intern('name', 'id', 'email');
            const err = new Error(
                "Expected parameter 'school' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});
