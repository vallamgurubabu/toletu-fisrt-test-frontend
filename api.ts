export const fetchNotifications = async (): Promise<string[]> => {
  // Dummy notifications
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['New message from landlord', 'Rent due tomorrow', 'Maintenance update'])
    }, 1000)
  })
}

export const performSearch = async (query: string, location: string): Promise<string[]> => {
  // Dummy search results
  console.log('Searching for', query, 'in', location)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Result 1 for ${query}`, `Result 2 for ${query}`])
    }, 1000)
  })


}

  export async function getListingById(id: string) {
  try {
    const res = await fetch(`http://localhost:3001/api/listings/${id}`)
    if (!res.ok) return null
    return await res.json()
  } catch (err) {
    console.error("Failed to fetch listing", err)
    return null
  }
}

