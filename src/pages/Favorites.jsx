import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Favorites komponent kuvab kõiki localStorage-le salvestatud raamatuid
 * Kasutajad saavad vaadata ja eemaldada raamatuid oma lemmikute loetelust
 */
function Favorites() {
  const [favorites, setFavorites] = useState([]);

  /**
   * Laadi lemmikud localStorage-st komponendi monteerimisel
   */
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  /**
   * Eemalda raamat lemmikutest ID järgi
   * @param {string} id - Eemaldatava raamatu ID
   */
  function removeFavorite(id) {
    const updated = favorites.filter((book) => book.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div>
      <h1 className="page-title">Lemmikud raamatud</h1>

      {favorites.length === 0 && (
        <p className="text-muted">Lemmikuid pole veel lisatud.</p>
      )}

      <div className="row">
        {favorites.map((book) => (
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
                    className="btn btn-outline-danger"
                    onClick={() => removeFavorite(book.id)}
                  >
                    Eemalda
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

export default Favorites;