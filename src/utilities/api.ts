export async function fetchAPI<T>(endpoint: string): Promise<T> {
  // Check localStorage first
  const cachedData = localStorage.getItem(endpoint);
  
  if (cachedData) {
    return JSON.parse(cachedData) as T;
  }

  // Fetch from API if not in cache
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const responseData = await response.json();
  
  // Save to localStorage as string
  localStorage.setItem(endpoint, JSON.stringify(responseData));

  return responseData as T;
}