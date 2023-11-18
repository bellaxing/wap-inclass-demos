// window.onload = function(){
//     fetch('http://localhost:3000/products')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }


window.onload = async function () {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    console.log(data);
    document.getElementById('save').onclick = saveProduct;
}

async function saveProduct() {
    const obj = {
        title: 'Angular',
        description: 'difficult',
        price: 500
    }
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    console.log(response);
}