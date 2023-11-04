const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

const jsObject = JSON.parse(jsonData);
console.log(jsObject.parent.children);



///export///

const ExportjsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
const jsonExportData = JSON.stringify(ExportjsObject);
console.log(jsonExportData);


///////////import & change & export


const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

const JsObject = JSON.parse(jsonData);

JsObject.parent.age = 35;

const jsObjectToJson = JSON.stringify(JsObject);
console.log(jsObjectToJson);
