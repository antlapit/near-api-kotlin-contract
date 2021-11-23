/**
 * Simple method that returns accountId in JSON
 */
export function test(accountId: string): string | null {
    return "{\"accountId\":\"" + accountId + "\"}"
}
