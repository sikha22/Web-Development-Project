//Creates a Buffer object of the specified length
const buf = Buffer.alloc(10);
console.log(buf);

//Creates a non-zero-filled Buffer of the specified length
const buf1 = Buffer.allocUnsafe(10);
console.log(buf1.fill('a'));

//Creates a Buffer object from an object (string/array/buffer)
const buf2 = Buffer.from('buffer');
console.log(buf2.toString());
console.log(buf2.toString('hex'));

const buf3 = Buffer.from('hello World','utf-8');
console.log(buf3.toString());

//Reading from Buffer
const buf4 = Buffer.from('This is a readable buffer');
console.log(buf4.toString());

//Concat Buffer
const buf5 = Buffer.from("Buffer 5 and ");
const buf8 = Buffer.from("Buffer 8 is Concated");
const buf9 = Buffer.concat([buf5, buf8]);
console.log(buf9.toString());

//Writing to buffer
const buf6 = Buffer.alloc(10);
buf6.write('Hello');
console.log(buf6.toString());

//Convert to JSON
const buf7 = Buffer.from('WELCOME');
console.log(buf7.toJSON());

//Comparison Buffer
const buf10 = Buffer.from('ABCD');
const buf11= Buffer.from('ABCD');
const result = buf10.compare(buf11);
// const result = buf10.equals(buf11);
if(result==0){
    console.log(buf10.toString()+" is equal to "+buf11.toString());
}
else{
    console.log(buf10.toString()+" is not equal to "+buf11.toString());
}
console.log("Comaprison done successfully");

//Copy Buffers
const buf12 = Buffer.from("LPU");
// const buf13 = buf12.slice();
const buf13 = Buffer.from(buf12);
console.log(buf13.toString());