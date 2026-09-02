// Object method --> Any function that is written inside an object known as method.
// function outside object -----> function
// function inside object ------> methods

const student = {
    firstName: 'Vinay',
    lastName: 'Daware',
    birthyear: 1995,
    calcAge: function () {
        return 2026 - this.birthyear;
    }
}
console.log(student.calcAge());

// here, calcAge() is method

// methods allows an object to perform actions

const mobile = {
    brand: 'Samsung',
    colour: 'Black',
    model: 'A34 5G',
    call: function () {
        console.log('Calling......📞📞')
    },
    camera: function () {
        console.log('Opening camera.....📷📷')
    },
    music: function () {
        console.log('Opening music player....🎵🎵')
    }
}
mobile.call();
mobile.camera();
mobile.music();

// this keyword---> this keyword reffers to an current object
const school = {
    name: 'Z.P. Upper Primary School',
    place: 'Zilpa',
    schoolInfo: function () {
        console.log(`The school name is ${this.name} and location is ${this.place}`);
        // here this means current object--->school
    }
}
school.schoolInfo();