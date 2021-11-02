import React, { Fragment } from 'react';
import "./Header.css";
import { SpeedDial, SpeedDialAction } from '@mui/material/lab';

const UserOptions = () => {
    return (
        <Fragment>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={()=>setOpen(false)}
                onOpen={()=>setOpen(true)}
                open={open}
            ></SpeedDial>
        </Fragment>
    )
}

export default UserOptions;
