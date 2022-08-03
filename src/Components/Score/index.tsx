import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import MotifitTitle from 'Components/reusable/MotifitTitle'
import ScoreBG from '../../assets/images/scoreBG.jpg'
import { Button, IconButton, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import {
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Score: React.FunctionComponent<{}> = ({ }) => {
  let history = useHistory();  

  const shareText = 'I am making great progress and becoming healthier with Motifit.'

  return (
    <Styles>
      <MotifitTitle>Score</MotifitTitle>
      
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: 300, display: 'flex', justifyContent: 'space-between' }}>
        <TwitterShareButton url="motifit.com" title={shareText} ><TwitterIcon round={true} /></TwitterShareButton>
        <WhatsappShareButton url="motifit.com" title={shareText} ><WhatsappIcon round={true} /></WhatsappShareButton>
        <TumblrShareButton url="motifit.com" caption={shareText} ><TumblrIcon round={true} /></TumblrShareButton> 
      </div>

      <div 
        style={{ width: 700, height: 700,  backgroundImage: `url(${ScoreBG})`, borderRadius: '50%', 
        marginTop: 11, marginBottom: 11, marginLeft: 'auto', marginRight: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center'  }}
      >

        <Typography sx={{ textAlign: 'center' }} variant="h4">

          <IconButton sx={{ color: 'black' }} >
              <SportsGymnasticsIcon />
          </IconButton>

          {`You have completed`}
          <br />
          {`757 workouts, 28 challenges`}
          <br />
          {`and burned 4323 calores.`}
          <br />
          {`Your overall score`}
          <br />
          {`is 87876.`}
          <br />
          
          <IconButton sx={{ color: 'black' }} >
              <AutoAwesomeIcon />
              <SentimentVerySatisfiedTwoToneIcon />
          </IconButton>
        </Typography>
      </div>

      <Button onClick={() => history.push('/workouts')} 
        sx={{ bgcolor: '#cddc39', color: 'black', width: '350px', marginLeft: 'auto', marginRight: 'auto'}} startIcon={<EmojiEventsTwoToneIcon />} variant="contained">
          Start a new workout</Button>

    </Styles>
  )
}

const mapStateToProps = state => {
  return {
    // transferMoneyLoading: state.accounts.transferMoneyLoading,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // transferMoney: (from, to, amount) => dispatch(transferMoney(from, to, amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)

const Styles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  
`
