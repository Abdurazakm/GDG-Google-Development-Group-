import React, { useCallback, useEffect, useMemo, useState } from "react";

function LiveSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  // Fetching user data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)) // Setting users
     
  }, []);

  // Filtering users based on the search query
  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query, users]
  );

  // Handling search input change
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div>
      <h1>Live Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search users..."
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveSearch;
