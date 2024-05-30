import {
    Card, 
    CardContent, 
    CardMedia, 
    Typography,
} from '@mui/material';
import React from 'react'

function GameHead({windowWidth}) {
  return (
    <Card sx={{ display: 'flex', flexDirection: windowWidth < 700 && 'column', gap: '25px', padding: '25px', borderRadius: '15px', transition: 'all 1s'}}>
        
        <CardMedia
            component="img"
            sx={{ width: windowWidth < 700 ? '100%' : '65vw', borderRadius: '15px' }}
            image="/img/games/ffxv-gameplay.png"
            alt="Final Fantasy XV"
        />

        <CardContent sx={{
            gap: '15px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <CardMedia 
                component="img"
                sx={{width: '100%', borderRadius: '15px'}}
                image="/img/games/ffxv.png"
                alt="Final Fantasy XV"
            />

            <Typography component="div" variant='h5'>
                Final Fantasy XV
            </Typography>
            <Typography component="div" variant='p' minHeight={'120px'} sx={{textAlign: 'center', textJustify: 'center'}}>
                Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series.
            </Typography>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography component="div" variant='p' fontWeight={'bold'}>
                        Reviews: 
                    </Typography>
                    <Typography component="div" variant='p' fontWeight={'bold'}>
                        Release Date: 
                    </Typography>
                    <Typography component="div" variant='p' fontWeight={'bold'}>
                        Developer: 
                    </Typography>
                    <Typography component="div" variant='p' fontWeight={'bold'}>
                        Publisher: 
                    </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography component="div" variant='p'>
                        Mostly Positive
                    </Typography>
                    <Typography component="div" variant='p'>
                        Nov 29, 2016
                    </Typography>
                    <Typography component="div" variant='p'>
                        Square Enix
                    </Typography>
                    <Typography component="div" variant='p'>
                        Square Enix
                    </Typography>
                </div>
            </div>
                
        </CardContent>

    </Card>
  )
}

export default GameHead