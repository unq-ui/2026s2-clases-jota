import Svg, { Circle, G, Path, Polygon, Rect } from 'react-native-svg';

const Pokedex = (props) => (
  <Svg viewBox="0 0 1200 1200" width="24" height="24" {...props}>
    <G fill="none" stroke="currentColor" strokeWidth="50" strokeLinejoin="round" strokeLinecap="butt">
      <Rect x="225" y="25" width="750" height="1150" />

      <Path d="M225 375 H463 C510 375 550 358 580 328 L618 290 C655 250 700 225 740 225 H975" />

      <Circle cx="400" cy="200" r="75" />

      <Path d="M875 225 V1175" />
      <Path d="M875 375 H975" />
      <Path d="M875 1025 H975" />

      <Path d="M475 1075 H725" strokeWidth="50" strokeLinecap="round" />
    </G>

    <G fill="currentColor">
      <Circle cx="575" cy="125" r="25" />
      <Circle cx="675" cy="125" r="25" />
      <Circle cx="775" cy="125" r="25" />
    </G>
    <Polygon points="325,675 375,725 325,775" fill="currentColor" stroke="currentColor" strokeWidth="50" strokeLinejoin="round" />
  </Svg>
);

export default Pokedex;