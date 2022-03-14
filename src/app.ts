type TypeUser = {
    id: number,
    name: string,
    birthday: string
}

const showUser = (user: TypeUser): TypeUser => {
    const tuantm: TypeUser = {
        id: 1,
        name: 'tuantm',
        birthday: '03032001'
    }
    return {
        ...tuantm,
        id: 2
    }
}

console.log(showUser)

//Generic
const showVarible = (varilble: any): any => {
    return varilble;
}

showVarible('tuantm')

const showStudent = <T extends unknown>(student: T): T => {
    return student
}

showStudent('tuantmph13096')
showStudent<string | number>(2)
showStudent<boolean>(true)
showStudent<object>({
    id: 1,
    name: 'tuantm'
})

const showTeacher = <T, U>(name: T, age: U, address: T): {
    name: T,
    age: U,
    address: T
} => {
    return {
        name: name,
        age: age,
        address: address
    }
}

showTeacher<string, number>('tuan', 20, '')



