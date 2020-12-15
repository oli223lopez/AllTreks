


export const showNationalPark = nationalParkId => (
    $.ajax({
        url: `/api/national_parks/${nationalParkId}`,
        method: 'GET'
    })
)



