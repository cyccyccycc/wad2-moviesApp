import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPeopleTranslations } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ people }) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    getPeopleTranslations(people.id).then(translations => {
      setTranslations(translations);
    });
  }, [people.id]);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {translations.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{excerpt(r.biography)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/translations/${r.id}`,
                      state: {
                        translation: r,
                        people: people
                      }
                    }}
                  >
                    Full Translation
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};