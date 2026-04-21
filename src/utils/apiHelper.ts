// apiHelper.ts

/**
 * API Helper Functions
 * Used for combined UI/API testing.
 */

/**
 * Fetch data from the API.
 * @param endpoint - The API endpoint to fetch data from.
 * @param options - Additional options for the fetch request.
 * @returns - Promise resolving to the fetched data.
 */
export async function fetchData(endpoint: string, options: RequestInit = {}): Promise<any> {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
}

/**
 * Post data to the API.
 * @param endpoint - The API endpoint to post data to.
 * @param data - The data to be posted.
 * @returns - Promise resolving to the response of the post request.
 */
export async function postData(endpoint: string, data: any): Promise<any> {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
    }
    return await response.json();
}