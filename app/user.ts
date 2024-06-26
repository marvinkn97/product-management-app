import { CommaExpr } from "@angular/compiler"
import { Company } from "./company"
export interface User {
         id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string
            }
        },
        phone: string,
        website: string,
        company: Company
}
