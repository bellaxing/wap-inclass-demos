const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

const result = students.filter(stu => stu.courses.includes('cs303'))
    .reduce((obj, stu) => {
        obj[stu.name] = stu.grades.reduce((avg, g, index, array) => avg + g/array.length, 0);
        return obj;
    }, {});
console.log(result);