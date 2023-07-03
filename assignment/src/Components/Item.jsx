import React from 'react'
import {Box, Typography} from "@mui/material"


export const Item = ({name,price,id}) => {
  return (
    <>
    <Typography variant='h1' marginTop={"100px"} >Card</Typography>
    <Box border={"1px solid #468bdf"} width={"250px"} height={"250px"} margin={"200px -200px"}  padding={"20px"} display={"flex"} flexDirection={"column"} gap={"30px"}>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='h6'>Price: Rs. {price}</Typography>
        <Typography variant='h4'>Item Id: {id}</Typography>
    </Box>
    </>
  )
}
