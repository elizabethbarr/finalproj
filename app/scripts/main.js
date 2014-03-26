console.log('\'Allo \'Allo!');

Parse.initialize("gnlEkmksPP0cjEXhLSHT0U6nUrjk1os4Hm1RDTs7", "JGA4hNgJx57nJ5x36XcECP7GIRXYKZecdd9iscjI");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
