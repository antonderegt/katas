export function buildString(...args) {
    if(args.length === 0) throw new Error('No words given')
    return args.join(' ')
}