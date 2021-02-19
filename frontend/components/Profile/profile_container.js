import {connect} from 'react-redux'
import Profile from './profile'
import {getUser} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    username: ownProps.match.params.username,
    user: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (username) => dispatch(getUser(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)