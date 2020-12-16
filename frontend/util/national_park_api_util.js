


export const showNationalPark = nationalParkName => (
    $.ajax({
        url: `/api/national_parks/${nationalParkName}`,
        method: 'GET'
    })
)



