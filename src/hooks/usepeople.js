import { useEffect, useState } from "react";
import {getpeopledetail} from '../api/tmdb-api'

const usePeople = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getpeopledetail(id).then(person => {
      setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePeople