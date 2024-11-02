import { parsedSpecifications } from "./types"

export default function parseSpecifications(input: string = ''): parsedSpecifications {

    const tmp = input.split(',')

    const output = tmp.map(pair => pair.split(':'))

    return output
}
