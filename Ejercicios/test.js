//* map
/**
    Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).
**/

const users = [{
        name: 'Geogr',
        email: 'georg@academlo.com'
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com'
    }
]

const attendace = [{
        email: 'georg@academlo.com',
        attendance: true
    },
    {
        email: 'andrea@gmail.com',
        attendance: false
    }
]
/**
    Output expect:
        [
            { name: 'Geogr', email: 'georg@academlo.com', attendance: true },
            { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
        ]
**/
function dataMerge(users, attendace) {
    let data = []
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < attendace.length; j++) {
            if (users[i].email === attendace[j].email) {
                data.push({
                    name: users[i].name,
                    email: users[i].email,
                    attendace: attendace[j].attendance
                });
            }
        }
    }
    return data;
}

// console.log(dataMerge(users, attendace));

/*
    Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.
 */

const students = [{
        name: 'Geogr',
        email: 'georg@academlo.com',
        score: 100
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com',
        score: 70
    },
    {
        name: 'Andrés',
        email: 'andres@gmail.com',
        score: 34
    }
]

function orderStudentsByScore(students) {
    students.sort(function (a, b) {
        return a.score - b.score
    })
    return students
}

// console.log(orderStudentsByScore(students));

//  El método sort nos permite ordenar objetos em base a su valor unicode si no se le indica ninguna funcion. o bien en la funcion se puede especificar la manera en la que deberán ser ordenados los elementos; en el caso de los objetos estos pueden ser ordenados por una de sus propiedades.



/*
    Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.
    En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.
        -Recuerda utilizar return para devolver tu solución.
        -El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
        -El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país.
*/
const students_country = [{
        name: 'Geogr',
        email: 'georg@academlo.com',
        country_id: 1
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com',
        country_id: 2
    },
    {
        name: 'Daniela',
        email: 'daniela@gmail.com',
        country_id: 2
    },
    {
        name: 'Mónica',
        email: 'monica@gmail.com',
        country_id: 2
    }
]
const countries = [{
        id: 1,
        name: 'Mexico',
    },
    {
        id: 2,
        name: 'Colombia'
    }
]

function countStudents(students, countries, contryName) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if (contryName === countries[j].name && students[i].country_id === countries[j].id) {
                count += 1;
            }
        }
    }
    return count
}


// console.log(countStudents(students_country, countries, "Mexico"));

/*
    Tu labor es encontrar y retornar la edad que se repite más veces.
    En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.
        -Recuerda utilizar return para devolver tu solución.
        -El arreglo que recibe la función puede tener n cantidad de estudiantes.
*/
const students_age = [
    {name: 'Daniela',age: 25},
    {name: 'Andrea',age: 23},
    {name: 'Jose',age: 27},
    {name: 'Geogr',age: 23},

];

function findMostCommonAge(students) {
    let ages = {};
    for(let i= 0; i < students.length; i++){
        if(ages[students[i].age] ==  students[i].age){
            ages[students[i].age] += 1;
        }else{
            ages[students[i].age] = 1;
        }
    }
    return ages;

}

// console.log(findMostCommonAge(students_age));


/*
    Tu labor es encontrar y devolver al usuario con el nombre recibido.Ejemplo:
    En el caso de haber recibido el arreglo mencionado anteriormente y el nombre 'Gustavo' deberías retornar:
*/


const users_name = [
    {name: 'Erik', gender: 'male', age: 22},
    {name: 'Daniela', gender: 'female', age: 22},
    {name: 'Gustavo', gender: 'male', age: 49},
    {name: 'María', gender: 'female', age: 35},
];

function findUser(users, name){
    let user = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].name == name){
            user = users[i]
        }
    }
    return user;
}

// console.log(findUser(users_name, 'María'));


/*
    Tu labor es obtener solo a los usuarios que hayan enviado su aplicación, para esto puedes tomar como referencia la propiedad application de cada usuario.
*/

let register = [
    {
        name: 'Erik',
        email: 'erik@academlo.com',
        channel: 'youtube',
        application: null
    },
    {
        name: 'Georg',
        email: 'georg@gmail.com',
        channel: 'facebook',
        application: {
            country: 'Mexico',
            state: 'Nuevo León'
        }
    },
    {
        name: 'Daniela',
        email: 'daniela@gmail.com',
        channel: 'youtube',
        application: {
            country: 'Colombia',
            state: 'Bogotá'
        }
    }
];