class Order {
    constructor(
        public address: string,
        public number: number,
        public optionAddress: string,
        public paymentOption: string,
        public orderItem: OrderItem[] = [],
        public id?: string
    ) { }
}

class OrderItem {
    constructor(
        public quatity: number,
        public menuID: string
    ) { }
}

export {
    Order,
    OrderItem
}