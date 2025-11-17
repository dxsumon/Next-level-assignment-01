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

    getDetails() {
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
    const uniqueArr:T[] = [...arr1];
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
            uniqueArr.push(arr2[i]);
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