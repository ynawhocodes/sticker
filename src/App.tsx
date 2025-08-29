import './App.css';
import sticker from './assets/sticker.png';
import epSticker from './assets/ep-sticker.png';
import StickerPeel from './components/StickerPeel';

function App() {
  return (
    <div className='w-full h-full bg-black overflow-hidden'>
      <StickerPeel imageSrc={sticker} width={300} rotate={15} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 50, y: 100 }} label='양나원' />
      <StickerPeel imageSrc={epSticker} width={300} rotate={5} peelBackHoverPct={30} peelBackActivePct={70} shadowIntensity={0.6} lightingIntensity={0.1} initialPosition={{ x: 150, y: 350 }} label='Everyday Practice' />
    </div>
  );
}

export default App;
