import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean
}
export function Profile({showProfileData = true}: ProfileProps){
    return (
        <Flex align = 'center'>
        {showProfileData && (
            <Box mr = '4' textAlign = 'right'>
            <Text>Jhonatan Clarindo</Text>
            <Text color='gray.300' fontSize='small'>
                jhonatancs97@hotmail.com
            </Text>
        </Box>
        )}
        <Avatar size = 'md' name = 'Jhonatan Clarindo' src= 'https://github.com/JhonatanClarindo.png'  />
        </Flex>
    );
}