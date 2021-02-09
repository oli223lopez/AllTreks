

export const createPhoto = formData => {
    return $.ajax({
        url: 'api/photos',
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    })
}


export const deletePhoto = photoID => {
    return $.ajax({
        url: `api/photo/${photoID}`,
        method: "DELETE"
    })
}