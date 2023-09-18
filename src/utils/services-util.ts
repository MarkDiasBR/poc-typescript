export function isIntegerString(str: string): boolean {
    // Use a regular expression to check if the string consists of digits only
    return /^\d+$/.test(str);
}
