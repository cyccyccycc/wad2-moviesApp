import { useEffect, useState } from "react";
import {getpeopledetail} from '../api/tmdb-api'

const usePeople = id => {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getpeopledetail(id).then(people => {
      setPeople(people);
    });
  }, [id]);
  return [people, setPeople];
};

export default usePeople