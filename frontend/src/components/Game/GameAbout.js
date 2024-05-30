import { Card, Typography } from '@mui/material'
import React from 'react'

function GameAbout() {
  return (
    <Card sx={{display: 'flex', flexDirection: 'column', gap: '15px', borderRadius: '15px', padding: '25px'}}>
        <Typography component="div" variant="h4">
            About this Game
        </Typography>
        <Typography component="div" variant="p">
            Joined by your closest friends on the roadtrip of a lifetime through a breathtaking open world, witness stunning landscapes and encounter larger-than-life beasts on your journey to reclaim your homeland from an unimaginable foe.
            In an action-packed battle system, channel the power of your ancestors to warp effortlessly through the air in thrilling combat, and together with your comrades, master the skills of weaponry, magic and team-based attacks.
            Now realised with the power of cutting-edge technology for Windows PCs, including support for high-resolution displays and HDR10, the beautiful and carefully-crafted experience of FINAL FANTASY XV can be explored like never before.
        </Typography>
    </Card>
  )
}

export default GameAbout