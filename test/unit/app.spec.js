describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        xit('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 16, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: "Zack", age: 5, course: 'kids'
            });
        });
    });

    describe('calculateArea', function () {
        it('should return -1, Error', function () {});
        it('should return -1, Error', function () {
            expect(app.calculateArea(1, 2, 3,"Succes","Error")).toEqual({
                area: -1, message: 'Fail'
            });
        });

        it('should return 4, Error', function () {
            expect(app.calculateArea(1, 9, 5,"Succes","Error")).toEqual({
                area: 4, message: 'Succes'
            });
            expect(app.calculateArea(2, 12, 4,"Succes","Error")).toEqual({
                area: '4', message: 'Succes'
            });
        });
    });

});


