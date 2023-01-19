export interface FormFields {
    name: string
    email: string
    phone: number
    selector1: string
    selector2: string
    checkbox1: Array<Ingredients & { checked: boolean }>
    file: FileList
    ingredients: string
    message: string
}

export interface FormItems {
    cakeshapes: Array<Cackeshape>
    ingredients: Array<Ingredients>
    cakesweights: Array<Cakesweight>
}

export interface Cackeshape {
    id: string
    name: string
}

export interface Ingredients {
    id: string
    name: string
}

export interface Cakesweight {
    id: string
    name: string
}
