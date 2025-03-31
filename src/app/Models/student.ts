export interface IStudent{
    name: string,
    age: null|number,
    grade: string,
    subjects: string,
    isEnrolled: boolean,
    address: {
      street: string,
      city: string,
      zip: null| number
    }
}