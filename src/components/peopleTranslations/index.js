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
          <th scope="col">Name</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {translations.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{excerpt(t.biography)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/translations/${t.id}`,
                      state: {
                        translation: t,
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