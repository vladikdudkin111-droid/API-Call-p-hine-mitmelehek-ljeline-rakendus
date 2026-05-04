// Google Books API otspunkt
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

/**
 * Otse raamatuid Google Books API-st
 * @param {string} query - Otsingu päring (nt "Harry Potter", "React")
 * @returns {Promise<Array>} Raamatu objektide massiiv API-st
 */
export async function searchBooks(query) {
  // Eemalda tühikud päringu algusest ja lõpust
  const cleanQuery = query.trim();

  // Tagasta tühi massiiv, kui päring on tühi
  if (!cleanQuery) {
    return [];
  }

  // Ehita URL kodeeritud päringuga ja piira 24 tulemuse peale
  const url = `${BASE_URL}?q=${encodeURIComponent(
    cleanQuery
  )}&maxResults=24&printType=books`;

  // Tõmba andmed API-st
  const response = await fetch(url);

  // Käsitle API vigu
  if (!response.ok) {
    throw new Error("Raamatute laadimine ebaõnnestus");
  }

  const data = await response.json();
  return data.items || [];
}

/**
 * Tõmba üksikasjalikku teavet konkreetse raamatu kohta ID järgi
 * @param {string} id - Raamatu ID Google Books API-st
 * @returns {Promise<Object>} Täielik raamatu objekt üksikasjaliku teabega
 */
export async function getBookById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  // Käsitle API vigu
  if (!response.ok) {
    throw new Error("Raamatu detailide laadimine ebaõnnestus");
  }

  return await response.json();
}