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
            <Heading as='h3' size='l' noOfLines={1}>
                Fit your body
            </Heading>
            <Heading as='h5' size='m' noOfLines={1}>
                Thierry and Gerald
            </Heading>
            <Text mt='1rem'>Reach your fitness goals with our premium exercise library.</Text>
            <Link href="#searchBar">
                <Button mt="1rem" colorScheme="messenger">Search exercises</Button>
            </Link>
        </Flex>
        <div className={styles.heroImage}></div>
    </Flex>
  )
}

export default FitApp