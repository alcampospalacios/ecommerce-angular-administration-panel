export interface Order {
    fk_user_order?: number,
    id?: number,
    idproducts: JSON,
    resume: JSON,
    amount: number,
    totalPrice: number,
    status: string
    date: Date,
    
    nameReceiver: string
    lastnameReceiver: string
    ci: string
    address: string
    movilPhone: string
    anotherPhone: string
}
