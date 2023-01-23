import React, { useState } from 'react';

interface IUser {
  uid: string;
  name: string;
}

const USer = () => {
  const [user, setUser] = useState<IUser>();

  const login = () => {
    setUser({
      uid: 'Abcdf',
      name: 'Pedro Losas',
    });
  };

  return (
    <>
      <h3 className="mt-5">Usuario</h3>

      <button onClick={login} className="btn btn-primary m-3">
        Login
      </button>

      {!user ? (
        <pre>No hay usuario</pre>
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </>
  );
};

export default USer;
