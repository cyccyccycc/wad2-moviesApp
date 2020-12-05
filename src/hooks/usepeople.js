import { useEffect, useState } from "react";
import {getpeople} from '../api/tmdb-api'

const usepeople = id => {
  const [people, setpeople] = useState(null);
  useEffect(() => {
    getpeople(id).then(people => {
      setMovie(people);
    });
  }, [id]);
  return [people, setpeople];
};

export default usepeople