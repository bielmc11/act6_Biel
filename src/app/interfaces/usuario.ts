export interface Usuario {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    results: Usuario_in[]
}

export interface Usuario_in{
    _id: string,
    id:number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    image: string,
    password: string
}
