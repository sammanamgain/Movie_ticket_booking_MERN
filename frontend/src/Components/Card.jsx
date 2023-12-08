import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Cardbox(props) {
  return (
    <div className='p-3 h-24 '>
      <Card sx={{ maxWidth: 345, minHeight: 400, }} key={props.data._id}>
        <CardActionArea>
                 
            <CardMedia
              component='img'
              height='140'
              image={props.data.url}
              alt='green iguana'
              sx={{ maxHeight: 150 }}
            />
          
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {props.data.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                          {
                              props.data.description
              }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Book
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
