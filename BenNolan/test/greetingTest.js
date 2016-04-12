var chai = require('chai');
var expect = chai.expect;
var Name = require(__dirname + '/../lib/greeting');

var someName = new Name();

describe('greeting', function() {
  it('should have a name', function(){
    expect(someName.name).to.eql('Ben');
  });
  it('should output Hello and name of user', function(){
    expect(someName.greeting).to.eql('Hello' + someName.name);
  });
});
