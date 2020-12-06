import { useEffect, useState } from "react";
import {getpeople} from '../api/tmdb-api'

const usePeople = id => {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getpeople(id).then(people => {
      setPeople(people);
    });
  }, [id]);
  return [people, setPeople];
};

export default usePeople