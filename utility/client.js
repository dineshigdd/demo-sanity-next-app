import client from '@sanity/client'

export const sanityClient = client({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset:process.env.SANITY_DATASET,
    apiVersion:'2022-09-27', // You can use current UTC date 
    token: process.env.SANITY_TOKEN,
    useCdn:false, // make it `false` to ensure fresh data
})
