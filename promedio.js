const notas = [6,8,9,2,5,10]

function sumaNotas(notas){
    let suma = 0

        for(let i = 0; i<notas.length; i++){
            const element = notas[i];
            suma = element + suma
        }
        return suma
}

//console.log(sumaNotas(notas))

function promedioNotas(notas){
    //console.log(notas)
    //console.log(sumaNotas(notas))
    let promedio = 0
    promedio = sumaNotas(notas)/(notas.length)
    return promedio
}
console.log("El promedio de notas es: ", promedioNotas(notas))