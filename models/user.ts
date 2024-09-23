export type User = {
    _id: string;
    name: string;
    surname:string | undefined;
    email: string;
    password: string;
    dateOfBirth: Date
}