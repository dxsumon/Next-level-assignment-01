type FormatValueType = number | string | boolean;
const formatValue = (value: FormatValueType): FormatValueType => {
    if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "string") {
        return value.toString().toUpperCase();
    }
    else{
        return !value;
    }
}


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


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type BooksType = {
    title: string;
    rating: number;
}

const filterByRating = (items: BooksType[]): BooksType[] => {
    const higestRatingBook = items.filter(item => item.rating >= 4);
    return higestRatingBook;
}


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


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails=(books:Book)=>{
    console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable? "Yes":"No"}`);
}


const getUniqueValues=<T>(arr1:T[],arr2:T[]):T[]=>{
    const uniqueArr:T[] = [];
    for (let i = 0; i < arr1.length; i++) {
        uniqueArr[i] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        let duplicate:boolean = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if(arr2[i] === uniqueArr[j])
            {
                duplicate = true;
                break;
            }
        }
        if(!duplicate)
        {
            uniqueArr[uniqueArr.length] = arr2[i];
        }
    }
    return uniqueArr;
}
interface Product{
    name: string;
    price: number;
    quantity: number;
    discount?:number;
}

const calculateTotalPrice=(products:Product[]):number=>{
    if(products.length === 0)
    {
        return 0;
    }
    return products.reduce((acc,product)=>{
        const productTotalprice = product.price* product.quantity;
        const discountPrice = product.discount? (productTotalprice * product.discount) / 100: 0;

        return acc+(productTotalprice - discountPrice);
    },0)
}

// 1
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
// 2
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
//3
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
//4
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
//5
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// 7
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
//8
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
