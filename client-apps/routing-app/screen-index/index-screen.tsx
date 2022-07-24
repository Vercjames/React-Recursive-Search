import React from "react"
import { TextField, Grid } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./index-screen.scss"
import { searchTree } from  "@helpers/search"
import { dataset01 } from  "@globals/global-data/dataset-01"



// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const IndexScreen = () => {
  const [search, setSearch] = React.useState<string>("")
  const [filteredObjData, setFilterObjData] = React.useState(null)
  const [originalObjData, setOriginalObjData] = React.useState(dataset01)



  React.useEffect(() => {

  }, [search])

  return (
    <div style={{ fontSize: 20 }}>
      <Grid container style={{ position: "fixed", top: 16, left: 16, borderBottom: "solid black 1px"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginBottom: 7}} onChange={() => searchTree(originalObjData, search)}/>
      </Grid>

      <Grid container style={{ marginTop: 80, minHeight: " calc(100vh - 96px)" }}>
        <Grid item xs={6} style={{ padding: 16, borderRight: "solid black 1px"}}>
          xs=4
        </Grid>
        <Grid item xs={6} style={{ padding: 16 }}>
          xs=4
        </Grid>
      </Grid>
    </div>
  )
}

