import {Button, Box, Text, Heading, VStack, IconButton, HStack, StackDivider} from  '@chakra-ui/react'

export default function Sidebar(){
    return (
        <>
            <Box
                flex=''
                backgroundColor="gray.900"
                p="2"
                alignContent="start"
                m='5'
                shadow="lg"
                rounded="lg"
            >   
                <HStack
                    divider={<StackDivider backgroundColor='gray.400'/>}
                >
                    <VStack 
                        divider={<StackDivider backgroundColor='gray.400'/>}
                        spacing="4"
                        align = "stretch"
                        color= 'white'

                    >
                        <Button>first menu item  </Button>
                        <Button>second menu item </Button>
                        <Button>third menu item  </Button>
                        <Button>fourth menu item </Button>
                        <Button>sixth menu item  </Button>
                    </VStack>
                    <Box bgColor={'green.200'} w='full' h='full'></Box>
                    <Box bgColor={'blue.200'} w='full' h='full'>
                       
                    </Box>
                </HStack>
            </Box>
        </>
    )
}