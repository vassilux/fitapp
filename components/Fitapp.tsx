'use client'
import { Flex, Heading, Text, Button } from "@chakra-ui/react"
import styles from './Fitapp.module.css'

import Link from 'next/link'

const FitApp = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        height='60vh'
    >
        <Flex
            direction='column'
            pl='2rem'
            width='70%'
        >
            <Heading as='h1' size='xl' noOfLines={1}>
                Fit Your Body
            </Heading>
            <Text mt='1rem'>Reach your fitness goals with our premium exercise library.</Text>
            <Link href="#searchBar">
                <Button mt="1rem" colorScheme="messenger">Search exercises</Button>
            </Link>
        </Flex>
        <div className={styles.FitAppImage}></div>
    </Flex>
  )
}

export default FitApp