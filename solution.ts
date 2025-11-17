
// 01
type FormatValueType = number | string | boolean;
const formatValue = (value: FormatValueType): FormatValueType => {
    if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "string") {
        return value.toString().toUpperCase();
    }
    else {
        return !value;
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// 02
type GetLengthType = string | unknown[]
const getLength = (value: GetLengthType): number => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// 03
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// 04
type BooksType = {
    title: string;
    rating: number;
}

const filterByRating = (items: BooksType[]): BooksType[] => {
    const higestRatingBook = items.filter(item => item.rating >= 4);
    return higestRatingBook;
}

// 05
interface Users {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: Users[]): Users[] => {
    const activeUsers = users.filter(isActive => isActive.isActive);
    return activeUsers;
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));


// 06
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails=(books:Book)=>{
    console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable? "Yes":"No"}`);
}


// 07
