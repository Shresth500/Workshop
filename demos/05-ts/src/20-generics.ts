// When you have types which are similar, but have some differences in the types that are used within them, you can use "Generics" to reduce the duplication of code

// We create a generic interface
// A generic type (in this case generic interface) is a blueprint for creating a real type  (in this case interface)
interface IProduct<NameType, PriceType> {
    name: NameType;
    price: PriceType;
}

interface TaxedAmount {
    baseAmount: number;
    tax: number;
}

interface DetailedName {
    productName: string;
    manufacturerName: string;
}

const pen: IProduct<string, number> = {
    name: "Hero Pen",
    price: 50,
};

const phone: IProduct<string, TaxedAmount> = {
    name: "Samsung Note 10",
    price: {
        baseAmount: 40000,
        tax: 5000,
    },
};

const xiaomiPhone: IProduct<DetailedName, TaxedAmount> = {
    name: {
        productName: "Note",
        manufacturerName: "Xiaomi",
    },
    price: {
        baseAmount: 15000,
        tax: 3000,
    },
};
