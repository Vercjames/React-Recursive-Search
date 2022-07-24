import React from "react"
import { TextField, Grid, Card,} from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./index-screen.scss"
// import { searchTree } from  "@helpers/search"
import { dataArrayFirst } from  "@globals/global-data/dataset-01"
import { dataObjectFirst } from  "@globals/global-data/dataset-02"



// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const IndexScreen = () => {
  const [search, setSearch] = React.useState<string>("")
  const [filteredData, setFilterData] = React.useState(null)
  //
  // React.useEffect(() => {
  //
  // }, [search])

  const renderData: any = (tree: any, tabDepth?: number, key?: string, index?: number) => {
    let indent = tabDepth ? tabDepth + 1 : 1
    console.log(indent)
    switch (Object.prototype.toString.call(tree)) {
      case "[object Object]": return (
        <div key={index}>
          {Object.keys(tree).map(function(key, index) {
            return renderData(tree[key], indent, key, index)
          })}
        </div>
      )

      case "[object Array]": return (
        <div key={index}>
          {tree.map((branch: any, index: number) => {
            return renderData(branch, indent, null, index)
          })}
        </div>
      )

      default: return (
        <div key={index} style={{ marginLeft: `${indent > 1 ? `${(indent-2)*10}px`: "0" }` }}>
          {`{${key}: ${tree} }`}
        </div>
      )

    }
  }


  return (
    <div style={{ fontSize: 20 }}>
      <Grid container style={{ position: "fixed", top: 17, left: 16, backgroundColor: "transparent", borderBottom: "solid black 1px"}}>
        {/*<TextField id="outlined-basic" label="Search" variant="outlined" style={{ marginBottom: 16}} onChange={() => searchTree(originalData,0, search)}/>*/}
      </Grid>

      <Grid container style={{ marginTop: 90, minHeight: " calc(100vh - 100px)" }}>
        <Grid item xs={6} style={{ padding: 16, borderRight: "solid black 1px"}}>
          <>
            <header style={{fontWeight: "bolder", fontSize: 24, color: "green"}}>Array First Data</header>
            {/*{renderData(dataArrayFirst)}*/}
          </>
        </Grid>
        <Grid item xs={6} style={{ padding: 16 }}>
          <header style={{fontWeight: "bolder", fontSize: 24, color: "red"}}>Object First</header>
          {renderData(dataObjectFirst)}
        </Grid>
      </Grid>
    </div>
  )
}

