import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/bookApi";

/**
 * BookDetails komponent kuvab üksikasjalikku teavet ühe raamatu kohta
 * Toob andmed Google Books API-st kasutades URL-i parameetrist raamatu ID-d
 */
function BookDetails() {
  const { id } = useParams(); // Hangi raamatu ID URL-ist
  const [book, setBook] = useState(null); // Salvesta raamatu andmed
  const [error, setError] = useState(""); // Veateade

  /**
   * Hangi raamatu üksikasjad komponendi monteerimisel või ID muutumisel
   */
  useEffect(() => {
    getBookById(id)
      .then(setBook)
      .catch((err) => setError(err.message));
  }, [id]);

  // Kuva veateade, kui tõmmine ebaõnnestus
  if (error) return <p className="text-danger">{error}</p>;

  // Kuva laadimisketta, kuni andmeid tõmmatakse
  if (!book) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border" role="status"></div>
        <p className="mt-2">Laadin...</p>
      </div>
    );
  }

  const info = book.volumeInfo;

  return (
    <div className="details-card">
      <div className="row">
        <div className="col-md-4 text-center mb-4">
          {info.imageLinks?.thumbnail ? (
            <img
              src={info.imageLinks.thumbnail}
              alt={info.title}
              className="img-fluid rounded shadow detail-cover"
            />
          ) : (
            <div className="empty-cover">📘</div>
          )}
        </div>

        <div className="col-md-8">
          <h1>{info.title}</h1>
          <p>
            <strong>Autorid:</strong> {info.authors?.join(", ") || "Puudub"}
          </p>
          <p>
            <strong>Kirjastaja:</strong> {info.publisher || "Puudub"}
          </p>
          <p>
            <strong>Avaldamise kuupäev:</strong>{" "}
            {info.publishedDate || "Puudub"}
          </p>
          <p>{info.description || "Kirjeldus puudub."}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;