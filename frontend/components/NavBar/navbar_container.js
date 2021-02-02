import { logout } from '../../actions/session_actions'
import { connect } from 'react-redux'
import NavBar from './navbar'




const mapStateToProps = ({ session, entities: { users } }) => {
    // console.log('this is the current user', users)
    return {
        currentUser: users
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)