const me = {
    first: 'John',
    last: 'Smith',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
}

const you = {
    first: 'JJ',
    last: 'Tuesday'
}

const logYou = me.getFullName.bind(you);
const result = logYou();
console.log(result);

