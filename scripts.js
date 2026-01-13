let name = ""
let age = 0
let courses = 0

function verifyName() {
    let name = prompt("What's your name?: ")
    if (name) {
        return name
    }

    alert("ERROR\nField empty, please enter a valid name")
    return verifyName()
}

function verifyNumber(number) {
    if (!isNaN(number)) {
        return number
    } else {
        return false
    }
}

function verifyAge () {
    let age = prompt("What's your age?: ")
    if (verifyNumber(age)) {
        if (age > 0 && age < 100) {
            return age
        }
    }

    alert("ERROR\nAge cannot be letters, negative or more than 100")
    return verifyAge()
}

function verifyCourses() {
    let courses = prompt("How many courses do you have?: ")
    if (verifyNumber(courses)) {
        if (courses > 0 && courses < 10) {
            return courses
        }
    }

    alert("ERROR\nCannot be letters, negative or more than 10")
    return verifyCourses()
}

function showInfo() {
    if (age > 17) {
        alert(`User Information\nName: ${name}\nAge: ${age} (You can drink beer now) ;)\nCourses: ${courses}`)
    } else {
        alert(`User Information\nName: ${name}\nAge: ${age} (You should be studying :v)\nCourses: ${courses}`)
    }
}

function simulateEvaluation() {
    let notes = []

    for (let i = 0; i < 3; i++) {
        let number = prompt(`Enter your note #${i+1}: `)
        if (verifyNumber(number)) {
            if (number < 0 || number > 5){
                alert("Note cannot be less than 0 or bigger than 5")
                i--
                continue
            }
        } else {
            alert("Cannot enter letters")
            i--
            continue
        }
        notes.push(parseFloat(number))
    }
    alert(`Your average is ${(notes[0] + notes[1] + notes[2]) / notes.length}`)
}

function secondMenu() {
    let flag = true
    while (flag) {
        let option = prompt(
            `
            1. Show use information
            2. Calculate notes average
            3. Go back
            `
        )
        switch (option) {
            case "1":
                showInfo()
                break;
            case "2":
                simulateEvaluation()
                break;
            case "3":
                flag = false
                break;
            default:
                console.log("Use only the options above");
        }
    }
}

function firstMenu() {
    let flag = true
    while (flag) {
        let option = prompt(
            `
            1. Register
            2. exit
            `
        )
        switch (option) {
            case "1":
                name = verifyName()
                age = verifyAge()
                courses = verifyCourses()

                alert(`Welcome ${name}`)
                secondMenu()
                break;
            case "2":
                alert("Good bye")
                flag = false
                break;
            default:
                console.log("Use only the options above");
        }
    }
}

firstMenu()
