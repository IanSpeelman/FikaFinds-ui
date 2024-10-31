export function isValidPassword(password: string): boolean {

    const length = password.length > 7
    const capitals = password.match(/[A-Z]/g) !== null
    const lowerCase = password.match(/[a-z]/g) !== null
    const numbers = password.match(/[0-9]/g) !== null
    const characters = (password.match(/[a-zA-Z0-9]/g)?.length ?? password.length) < password.length


    return length && capitals && lowerCase && numbers && characters
}
export function isValidEmail(email: string): boolean {

    return email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/) !== null

}

export function equalStrings(string1: string, string2: string) {
    return string1 === string2
}
