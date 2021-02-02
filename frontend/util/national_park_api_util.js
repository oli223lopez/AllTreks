


export const NationalPark = id => (
    $.ajax({
        url: `/api/national_parks/${id}`,
        method: 'GET'
    })
)

export const allNP = () => (
    $.ajax({
        url: `/api/national_parks/`,
        method: 'GET'
    })
)