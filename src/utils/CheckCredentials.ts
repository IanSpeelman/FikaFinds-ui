export function isValidPassword(inputPassword: string | undefined | null): boolean {
    const password = inputPassword || ""

    const length = password.length > 7
    const capitals = password.match(/[A-Z]/g) !== null
    const lowerCase = password.match(/[a-z]/g) !== null
    const numbers = password.match(/[0-9]/g) !== null

    let characterCount = password.match(/[a-zA-Z0-9]/g)?.length || 0
    const characters = characterCount < password.length

    return length && capitals && lowerCase && numbers && characters
}


export function isValidEmail(email: string | undefined): boolean {
    return email?.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/) !== null
}

export function equalStrings(string1: string | undefined | null, string2: string | undefined | null) {
    return string1 === string2
}
