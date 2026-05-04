import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchBooks } from "../services/bookApi";

function Books() {
  // Oleku juhtimine
  const [query, setQuery] = useState("javascript");
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("all"); // Filter: 'all' või 'ebooks'
  const [sort, setSort] = useState("title"); // Sorteeri pealkirja järgi
  const [loading, setLoading] = useState(false); // Laadimise indikaator
  const [error, setError] = useState(""); // Veateade

  /**
   * Automaatne raamatute laadimine komponendi monteerimisel
   * Kuvab vaikimisi "javascript" raamatuid lehe laadimisele
   */
  useEffect(() => {
    loadBooks("javascript");
  }, []);

  /**
   * Toob raamatuid Google Books API-st
   * @param {string} searchText - Otsingu päring
   */
  async function loadBooks(searchText) {
    setLoading(true);
    setError("");

    try {
      const data = await searchBooks(searchText);
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Käsitleb otsinguvormi esitamist
   */
  async function handleSearch(e) {
    e.preventDefault();
    loadBooks(query);
  }

  /**
   * Lisab raamatu localStorage lemmikutesse
   * @param {Object} book - Lemmikutele lisatava raamatu objekt
   */
  function addToFavorites(book) {
    const current = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!current.find((item) => item.id === book.id)) {
      localStorage.setItem("favorites", JSON.stringify([...current, book]));
      alert("Raamat lisati lemmikutesse!");
    } else {
      alert("See raamat on juba lemmikutes!");
    }
  }

  /**
   * Filtreeri ja sorteeri raamatuid praeguste filtri/sorteerimise seadete alusel
   * Filtreerib e-raamatuid, kui filter on seatud 'ebooks'
   * Sorteerib pealkirja järgi tähestiku järjekorras
   */
  const filteredBooks = books
    .filter((book) => {
      if (filter === "ebooks") {
        return book.saleInfo?.isEbook;
      }
      return true;
    })
    .sort((a, b) => {
      const titleA = a.volumeInfo.title || "";
      const titleB = b.volumeInfo.title || "";

      if (sort === "title") {
        return titleA.localeCompare(titleB);
      }

      return 0;
    });

  return (
    <div>
      <h1 className="page-title">Raamatute otsing</h1>

      <div className="search-panel">
        <form onSubmit={handleSearch} className="d-flex gap-2 mb-3">
          <input
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Näiteks: Harry Potter, React, Design..."
          />
          <button className="btn btn-primary">Otsi</button>
        </form>

        <div className="d-flex gap-2">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Kõik raamatud</option>
            <option value="ebooks">Ainult e-raamatud</option>
          </select>

          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="title">Sorteeri pealkirja järgi</option>
          </select>
        </div>
      </div>

      {/* Laadimise näitamine */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border" role="status"></div>
          <p className="mt-2">Laadin...</p>
        </div>
      )}

      {/* Vea näitamine */}
      {error && <p className="text-danger">{error}</p>}

      {!loading && filteredBooks.length === 0 && (
        <p className="text-muted">
          Sisesta otsingusõna ja vajuta nuppu “Otsi”.
        </p>
      )}

      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card book-card h-100">
              {book.volumeInfo.imageLinks?.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-cover"
                />
              ) : (
                <div className="empty-cover">📘</div>
              )}

              <div className="card-body d-flex flex-column">
                <h5>{book.volumeInfo.title}</h5>
                <p className="text-muted">
                  {book.volumeInfo.authors?.join(", ") || "Autor puudub"}
                </p>

                <div className="mt-auto">
                  <Link
                    className="btn btn-outline-primary me-2"
                    to={`/books/${book.id}`}
                  >
                    Detailid
                  </Link>

                  <button
                    className="btn btn-success"
                    onClick={() => addToFavorites(book)}
                  >
                    ♥ Lemmik
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;