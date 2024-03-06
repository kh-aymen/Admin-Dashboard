import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"

const Loadin = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Box textAlign="center">
                <CircularProgress />
                <Typography variant="h6" mt={2}>
                    Loading...
                </Typography>
            </Box>
        </Box>
    )
}

export default Loadin