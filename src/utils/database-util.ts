type ReturnObject = {
    name: string;
    port: string;
}

export function stringConsoleFormatter(dbString: string): ReturnObject {
    const nameAndPortArray = dbString.split(':').slice(-1)[0].split('/').reverse();
    return {name: nameAndPortArray[0], port: nameAndPortArray[1]};
}
