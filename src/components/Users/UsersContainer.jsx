import React from "react";
import {
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProcess, requestUsers, followSuccess, follow, unFollow,
} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader"
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getToggleIsFollowingProcess,
    getTotalUsersCount, getUsersSelector,
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props

        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props

        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize)
    };

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   toggleIsFollowingProcess={this.props.toggleIsFollowingProcess}
            />
        </div>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         toggleIsFollowingProcess: state.usersPage.toggleIsFollowingProcess,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleIsFollowingProcess: getToggleIsFollowingProcess(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         },
//         toggleFollowingProcess: (isFetching) => {
//             dispatch(toggleIsFollowingProcessActionCreator(isFetching))
//         }
//     }
// }
export default compose(
    connect(mapStateToProps,
    {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        toggleFollowingProcess,
        requestUsers,
        follow,
        unFollow,}),
)(UsersContainer)

// export default connect(mapStateToProps,
//     {
//         followSuccess,
//         unFollowSuccess,
//         setCurrentPage,
//         toggleFollowingProcess,
//         getUsers,
//         follow,
//         unFollow,
//     })(UsersContainer)