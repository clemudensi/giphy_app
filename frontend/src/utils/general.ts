const removeDuplicates = <T>(arr: T[], key: string): T[] => {
    /* eslint-disable-next-line */
    // @ts-ignore: Unreachable code error
    return [...new Map(arr.map((item: unknown) => [item[key], item])).values()] as T[];
};

export { removeDuplicates };
