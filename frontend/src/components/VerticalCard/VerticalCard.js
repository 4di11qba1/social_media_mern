import React from 'react'
import './VerticalCard.css'
import { ListItemText } from '@mui/material'
import { Star } from '@mui/icons-material'
import { useTheme } from '@mui/material';

function VerticalCard({item}) {
  const theme = useTheme();
  return (
    <div className="vertical-card" style={{backgroundImage: `url(${item.img})`}}>
        <div className="vertical-card-content">
            <ListItemText
                primary={item.title}
                secondary={item.genre}
            />
        </div>
        <div className="vertical-card-genre" style={{backgroundColor: theme.palette.background.paper}}>{item.rating} <Star sx={{width: '12px', height: '12px', transform: 'translateY(1.5px)'}} /></div>
    </div>
  )
}

export default VerticalCard