import * as PhotoAPI from '../util/photo_api_util'




export const CREATE_PHOTO = 'CREATE_PHOTO'
export const DELETE_PHOTO = 'DELETE_PHOTO'


export const postPhoto = () => ({
    type: CREATE_PHOTO
    
})


export const destoryPhoto = () => ({
    type: DELETE_PHOTO
})


export const createPhoto = (photo) => dispatch => {
    // console.log(photo)
    return PhotoAPI.createPhoto(photo)
    .then(res => dispatch(postPhoto()), err => console.log("not working"))
}


export const deletePhoto = (photoID) => dispatch => {
    return PhotoAPI.deletePhoto(photoID)
    .then(res => dispatch(destoryPhoto()))
}