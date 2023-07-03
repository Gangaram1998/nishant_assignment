import React from 'react'
import { Box, Button } from "@mui/material"
import {Data} from "../data"

export const List = ({ setId, setName, setPrice }) => {
    return (
        <Box width={"250px"} padding={"20px"} margin={"100px 300px"}>
            <Button variant="outlined" fullWidth="100px" >List of items</Button>
            <br />
            <br />
            {
                Data.length > 0 && Data.map((el) => {
                    return <>
                        <Button variant='outlined' fullWidth="100px"  key={el.id} onClick={() => { setId(el.id); setName(el.Name); setPrice(el.Price) }}>{el.Name}</Button><br />
                    </>
                })
            }
        </Box>
    )
}

//adding
