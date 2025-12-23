import React from 'react'
import classes from './FindaStore.module.css'
import {Link} from "next/link"
import PlaceIcon from "@mui/icons-material/Place";

function FindaStore() {

  return (
    <div>
      <Link className={classes.linkDivStore}>
        <PlaceIcon fontSize="small" />
        <h5> Find a store</h5>
      </Link>
    </div>
  );
}

export default FindaStore
