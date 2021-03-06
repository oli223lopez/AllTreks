


export const signup = user => {
    return $.ajax({
        url: 'api/users',
        method: 'POST',
        data: {user}
    })
}


export const login = user => {
    return $.ajax({
        url: 'api/session',
        method: "POST",
        data: {user}
    })
}

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);



export const getUser = (username) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`,
  })
)