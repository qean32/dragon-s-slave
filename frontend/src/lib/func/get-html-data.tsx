type DataAttribute = 'data' | 'value';

export function getHTMLData<T = unknown>(
    e: Event,
    name: DataAttribute = 'data',
    asJson = false
): T | string | null {
    const target = e.target as HTMLElement | null
    const raw = target?.getAttribute(name) ?? null

    if (raw === null) return null

    if (!asJson) return raw

    try {
        return JSON.parse(raw) as T
    } catch {
        return null
    }
}
