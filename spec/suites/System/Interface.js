define(['System/Interface'], function(System_Interface) {
    describe("System/Interface", function() {

        describe("init", function() {
            it("should be initialized correct", function() {
                var myInterface = new System_Interface('myInterface', ['method1', 'method2']);
                expect(myInterface instanceof System_Interface).toBeTruthy();
            });
            
            it("should throw an error, because constructor accept less or more than 2 parameters", function() {
                expect(function(){
                    new System_Interface('myInterface');
                }).toThrow(new ReferenceError('Interface constructor called with 1 argument(s), but expected exactly 2.'));
                
                expect(function(){
                    new System_Interface('myInterface', [], []);
                }).toThrow(new ReferenceError('Interface constructor called with 3 argument(s), but expected exactly 2.'));
            });

            it("should throw an error, because constructor accept method names not as a string", function() {
                expect(function(){
                    new System_Interface('myInterface', ['method1', 1, 'method2']);
                }).toThrow(new ReferenceError('Interface constructor expects method names to be passed in as a string.'));
            });
        });

    });
});