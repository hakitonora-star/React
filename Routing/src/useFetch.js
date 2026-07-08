import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function useFetch() {
  const { name } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const data = await response.json();
      setProfile(data);
    }

    fetchUser();
  }, [name]);

  return profile;
}