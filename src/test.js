const person = {
    name: {
        first: 'Yegor',
        last: 'Karachun'
    },
    age: 27
}

const {age = 44} = person;
    const shallowCopy = Object.assign({}, person);
console.log(shallowCopy)