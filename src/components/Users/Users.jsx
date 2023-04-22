import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged,...props}) => {

    return <div>
        {<Paginator totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>}
        {
            props.users.map(user => <User user={user}
            {...props}/>)
        }
    </div>
}

export default Users