import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/Util/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE-IS-FOLLOWING-PROCESS'

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleIsFollowingProcess: [],
    fake: 10,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state,
                toggleIsFollowingProcess: action.isFetching
                    ? [...state.toggleIsFollowingProcess, action.userId]
                    : state.toggleIsFollowingProcess.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export let followSuccess = (userId) => ({type: FOLLOW, userId})
export let unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let toggleFollowingProcess = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching, userId})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(page, pageSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProcess(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProcess(false, userId))
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unFollow.bind(usersAPI)

        followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)


    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)

        followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }
}


export default userReducer;