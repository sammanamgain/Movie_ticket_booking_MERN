import {useState} from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";
import Booking from './Booking';
export default function Cardbox(props) {
  const [clicked, setclick] = useState(null);
  const handleclick = () => {
    setclick(true)
  }
 
  return (
    <div className='w-[345px]'>
      <Card
        sx={{
          maxWidth: 345,
          minHeight: 450,
          maxHeight: 450,
          minWidth: 345,
          borderRadius: 2,
          zIndex: "tooltip",
          boxShadow: 10,
        }}
        key={props.data._id}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={props.data.url}
            alt='green iguana'
            sx={{ maxHeight: 190 }}
          />

          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              {props.data.title}
            </Typography>
            <Typography variant='body2'>{props.data.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='flex justify-center'>
          <Button onClick={handleclick} variant='contained'>
            Book Show
          </Button>
        </CardActions>
        {console.log(clicked)}
      </Card>
      {clicked && <Booking data={props.data._id} />}
    </div>
  );
}


Cardbox.propTypes = {
  // Prop validation goes here
  data: PropTypes.object.isRequired,
  
};