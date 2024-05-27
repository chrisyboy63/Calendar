function EnumToArray<Enum extends object>(enumToChange: Enum): Array<keyof Enum> {
    return (Object.keys(enumToChange) as Array<keyof typeof enumToChange>);
}

export { EnumToArray };