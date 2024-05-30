import React from 'react'
import GameRating from './GameRating'
import { Divider } from '@mui/material'

function AllRating({windowWidth}) {
  return (
    <div style={{display: 'flex', padding: '15px', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between'}}>
        {ratings.map((rating, index) => {
            return <>
                <GameRating windowWidth={windowWidth} key={index} category={rating.category} ratingValue={rating.ratingValue} />
                {/* <Divider flexItem orientation='vertical' /> */}
            </>
        })}
    </div>
  )
}

export default AllRating;

const ratings = [
    {
        category: 'Steam Ratings',
        ratingValue: '4.6'
    },
    {
        category: 'IGN Ratings',
        ratingValue: '4.9'
    },
    {
        category: 'OpenCritic Ratings',
        ratingValue: '4.7'
    }
]