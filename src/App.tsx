import './App.css';
import ynwSticker from './assets/ynw-sticker.png';
import epSticker from './assets/ep-sticker.png';
import StickerPeel from './components/StickerPeel';
import suiSticker from './assets/sui-sticker.png';
import hySticker from './assets/hy-sticker.png';
import kkcSticker from './assets/kkc-sticker.png';

function App() {
  return (
    <div className='w-full h-full bg-black overflow-hidden'>
      <StickerPeel imageSrc={ynwSticker} width={300} rotate={15} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.05} initialPosition={{ x: 50, y: 100 }} label='양나원' job='우주비행사' />
      <StickerPeel imageSrc={epSticker} width={300} rotate={5} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 150, y: 350 }} label='Everyday Practice' job='회사' />
      <StickerPeel imageSrc={suiSticker} width={250} rotate={-5} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 650, y: 200 }} label='정수이' job='피아니스트' />
      <StickerPeel imageSrc={hySticker} width={300} rotate={-5} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 1450, y: 500 }} label='양현호' job='영업사원' />
      <StickerPeel imageSrc={kkcSticker} width={300} rotate={-5} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 550, y: 500 }} label='김경철' job='의사' />
    </div>
  );
}

export default App;
