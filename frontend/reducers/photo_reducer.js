import { CREATE_PHOTO, DELETE_PHOTO } from '../actions/photo_actions'


const PhotoReducer = (state = {}, action) => {

    switch (action.type) {
        case CREATE_PHOTO:
            return {}
        case DELETE_PHOTO:
            return {}
        default: return state
    }

}

export default PhotoReducer