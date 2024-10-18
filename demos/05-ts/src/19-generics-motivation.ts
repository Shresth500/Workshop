// When you have types which are similar, but have some differences in the types that are used within them, you can use "Generics" to reduce the duplication of code

interface IProduct {
    name: string;
    price: number;
}

const pen: IProduct = {
    name: "Hero Pen",
    price: 50,
};

interface IProductWithTax {
    name: string;
    price: {
        baseAmount: number;
        tax: number;
    };
}

const phone: IProductWithTax = {
    name: "Samsung Note 10",
    price: {
        baseAmount: 40000,
        tax: 5000,
    },
};

interface IProductWithTaxAndDetailedName {
    name: {
        productName: string;
        manufacturerName: string;
    };
    price: {
        baseAmount: number;
        tax: number;
    };
}

export {};
