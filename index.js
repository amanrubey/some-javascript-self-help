
let url = new URL("https://www.google.com/search?q=go&rlz=1C5CHFA_enIN999IN1002&oq=go&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgwIAhAjGCcYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzU2NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8");
const qpms = url.searchParams.entries();
// console.log(qpms)
// for(let i = 0; i<qpms.size; i++)
// {
//     console.log(qpms[i])
// }
// let a = [7,9,68,5]
// let j = 0;
// for( i of a){
//     console.log(i,j);
//     j++;
// }
for(pm of qpms)
{
    const [key,value] = pm;
    console.log(key,value);
}