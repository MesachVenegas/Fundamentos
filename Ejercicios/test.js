//* map
/**
    Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).
**/

const users = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
]

const attendace = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
]
/**
    Output expect:
        [
            { name: 'Georg', email: 'georg@academlo.com', attendance: true },
            { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
        ]
**/
function dataMerge(users, attendace){
    let data = []
    for(let i = 0; i < users.length; i++){
        for(let j = 0; j < attendace.length; j++){
            if(users[i].email === attendace[j].email){
                data.push({name: users[i].name, email: users[i].email, attendace: attendace[j].attendance});
            }
        }
    }
    return data;
}

// console.log(dataMerge(users, attendace));

/*
    Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.
 */

const students = [
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]

function orderStudentsByScore(students){
    students.sort(function(a,b){
        return a.score - b.score
    })
    return students
}

// console.log(orderStudentsByScore(students));

//  El metodo sort nos permite ordenar objetos em base a su valor unicoide si no se le indica ninguna funcion. o bien en la funcion se puede especificar la manera en la que deveran ser ordenados los elementos; en el caso de los objetos estos pueden ser ordenados por una de sus propiedades.