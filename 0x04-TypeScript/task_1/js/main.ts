;export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [index:string]: any,
}

export interface Director extend Teacher {
  numberOfReport: number,
}
export interface printTeacherFunction {
  (firstName: string. lastName: string): string
}

export function printTeacher(firtsName: string, lastName: string): string {
  return `${firstName.slice(0)}. ${lastName}`;
}
