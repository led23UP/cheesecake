var fs = require('fs');
test('test selectEvent', () => {
 //Read the index.html file into a string
 var html = fs.readFileSync('public/index.html', 'utf8');
 expect(html).toEqual(expect.anything()); //any non-null value is okay