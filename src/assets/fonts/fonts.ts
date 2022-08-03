import { createGlobalStyle } from 'styled-components'
import MuliBold from './MuliBold.ttf'
import MuliRegular from './MuliRegular.ttf'
import CaviarDreams from './CaviarDreams.ttf'
import RajdhaniBold from './Rajdhani-Bold.ttf'
import colors from '../../constants/colors'

export default createGlobalStyle`
    @font-face {
    font-family: 'Muli-Bold';
    src: url('${MuliBold}') format('truetype');
    }

    @font-face {
    font-family: 'Muli-Regular';
    src: url('${MuliRegular}') format('truetype');
    }

    @font-face {
      font-family: 'Rajdhani-Bold';
      src: url('${RajdhaniBold}') format('truetype');
      }
      
    @font-face {
      font-family: 'CaviarDreams';
      src: url('${CaviarDreams}') format('truetype');
      }
    
    html, body, #root { 
        height: 100%; 
        width: 100%;
        background: ${colors.background}
      }
`
