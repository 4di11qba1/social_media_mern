import React from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
import HorizontalCard from './HorizontalCard';
import { Typography } from '@mui/material';
import Dropdown from './DropDown';
import { useTheme } from '@mui/material';
import { Card } from '@mui/material';

function Library({itemData}) {
    const theme = useTheme();
  return (
    <Card sx={{backgroundColor: theme.palette.background.default, borderRadius: '0px', paddingTop: '10px', paddingLeft: '75px', paddingRight: '10px'}}>

        {/* <AnimatePresence>    */}
        
            <div>
                <Typography component='div' variant='h5'>
                    Your Wishlist
                </Typography>
                <Typography component='div' variant='p'>
                    All your favorite games are displayed here.
                </Typography>

                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                        <Dropdown text={'Sort By'} />
                        <Dropdown text={'Filters'} />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {itemData.map((item, index) => {
                        return <HorizontalCard key={index} item={item} />
                    })}
                </div>
            </div>
        
        {/* </AnimatePresence> */}

    </Card>
  )
}

export default Library