const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
console.log(myURL.protocol, myURL.search);
const serachParams = myURL.searchParams;
console.log(serachParams.get('course1'));