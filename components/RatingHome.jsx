import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import styles from '../styles/Home.module.css'

const labels = {
  0.5: 'Katastrofalno',
  1: 'Jako lose',
  1.5: 'Lose',
  2: 'Solidno',
  2.5: 'Nije lose',
  3: 'Dobro',
  3.5: 'Vrlo dobro',
  4: 'Jako dobro',
  4.5: 'Odlicno',
  5: 'Top',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className={styles.ratingHome} style={{paddingLeft:'10%'}}>
        <Box
        sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
        }}
        >
        <Rating
            size='large'
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
            setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        </Box>
        <div className={styles.helpAndInformation}>
            <h2>Pomoc i informacije</h2>
        </div>
    </div>
  );
}