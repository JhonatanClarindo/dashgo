import { Box, Stack } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

export function Pagination(){
    return(
        <Stack
        mt='8'
        justify='space-between'
        align='center'
        spacing='6'
        direction = 'row'
        >

            <Box> 
                <strong>1</strong> - <strong>1</strong> de <strong>100 </strong> 
            </Box>

        <Stack direction='row' spacing='2'> 
        <PaginationItem number={1} isCurrent  />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        </Stack>

            </Stack>
    )
}