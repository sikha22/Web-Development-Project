//creating buffers
const buf1=Buffer.alloc(10);
console.log(buf1);

//creates a zero-filled Buffer of length 10
const buf2=Buffer.alloc(10,1);
console.log(buf2);
//creates a buffer of length 10
//filled with bytes which all have the value '1'.
const buf3= Buffer.allocUnsafe(10);
console.log(buf3);

const buf4 = Buffer.from([1,2,3]);
console.log(buf4);
//creates a Buffer conaining the bytes [1,2,3]

const buf5 = Buffer.from('test');
console.log(buf5);
//creates a Buffer containing the UTF-8 encoded bytes for the string 'test' 

