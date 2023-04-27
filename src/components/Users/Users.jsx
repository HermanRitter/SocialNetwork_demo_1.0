import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged,...props}) => {

    return <div>
        {<Paginator totalItemsCount={totalUsersCount}
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