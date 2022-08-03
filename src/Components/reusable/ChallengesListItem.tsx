import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import colors from '../../constants/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

interface Props {
  id: any
  title: string
  description: string
  score: number
  imagePath: string
  onClick?: () => void
}

const CustomStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: #795548;
  border-radius: 15px;
  margin: 5px;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;

`

const ChallengesListItem: React.FunctionComponent<Props> = ({ 
    id, title, description, score, imagePath, onClick = () => {} }) => {
  return (
    <CustomStyle key={id} onClick={onClick}>
      <Typography color={'white'} variant="body1">
        {title}
        <Tooltip title={"Focus areas: " + description}>
          <IconButton>
            <InfoOutlinedIcon sx={{ color: colors.motifitPink }} />
          </IconButton>
        </Tooltip>
        </Typography>
        <img
          src={require(`../../assets/images/${imagePath}`)}
          alt={title}
          height={280}
          width={280}
          loading="lazy"
          style={{ borderRadius: '50%', marginTop: 11 }}
        />
        
      <Typography sx={{ marginTop: 1, marginBottom: 1 }} color={'white'} variant="overline">
        {score} Score points
      </Typography>

      <Button onClick={onClick} sx={{ bgcolor: '#cddc39', color: 'black'}} startIcon={<FitnessCenterIcon />} variant="contained">Start</Button>

    </CustomStyle>
  )
}

export default ChallengesListItem;
