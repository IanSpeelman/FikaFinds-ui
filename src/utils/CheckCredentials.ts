export function isValidPassword(inputPassword: string): boolean {
    const password = inputPassword || ""

    const length = password.length > 7
    const capitals = password.match(/[A-Z]/g) !== null
    const lowerCase = password.match(/[a-z]/g) !== null
    const numbers = password.match(/[0-9]/g) !== null

    let characterCount = password.match(/[a-zA-Z0-9]/g)?.length || 0
    const characters = characterCount < password.length

    return length && capitals && lowerCase && numbers && characters
}


export function isValidEmail(email: string | null): boolean {
    return email?.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/) !== null
}

export function equalStrings(string1: string | null, string2: string | null) {
    return string1 === string2
}
