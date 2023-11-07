// 'use strict';

const user = {
    salute: '',
    greet: function () {

        this.salute = 'Hello';
        console.log(this.salute); //Hello

        //arrow function don't have this keyword, this keyword in arrow functions
        // is the same as it's surrounding envrionment.
        // surrounding envrionment -> closet method/function -> global
        const setFrench = (newSalute) => {  
            this.salute = newSalute;
        }
        setFrench('Bonjour');
        console.log(this.salute); //??Bonjour
    }
}
user.greet();


// const user = {
//     salute: '',
//     greet: function () {
//         const self = this;
//         self.salute = 'Hello';
//         console.log(self.salute); //Hello

//         const setFrench = function (newSalute) {
//             self.salute = newSalute;
//         }
//         // setFrench.bind(this, 'Bonjour')();
//         // setFrench.call(this, 'Bonjour');
//         // setFrench.apply(this, ['Bonjour']);
//         setFrench('Bonjour');
//         console.log(self.salute); //??Bonjour
//     }
// }
// user.greet();