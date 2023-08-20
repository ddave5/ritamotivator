import './App.css';
import Countdowntimer from './countdowntimer/Countdowntimer';
import Footer from './footer/Footer';

function App() {

  const motivations = [
   "A legjobb, amit az ember a családjáért tehet, hogy válik valakivé.",
   "Ha leesik, vedd fel, ha elhibázod, kezdd újra, és meglásd, sikerülni fog!",
   "Egyikünk sem tud mindent megtenni, amit szeretne, de az is meglepően sokat segít, ha egy-egy konkrét esetben megtesszük a tőlünk éppen telhetőt.",
   "Tégy meg minden tőled telhetőt, és ha optimista maradsz, eljuthatsz a napos oldalra!",
   "Semmi sem lehetetlen, semmi sem olyan nehéz, hogy ne lenne érdemes megpróbálni.",
   "Nem elég, ha csak túléled az életet - tudnod kell, miként szárnyalhatsz.",
   "Az álmaidat senki nem veheti el tőled, de senki nem is álmodhatja meg helyetted!",
   "Amihez nincs kedved, azt elkezdeni nehéz. Amihez nagyon nincs; azt folytatni. És amihez igazán van, azt meg abbahagyni.",
   "Néha a legkisebb lépés is több, mint a semmi.",
   "Ha egy tojást külső erő tör össze, az élet véget ér. Ha belső erő, akkor egy élet kezdődik. A nagy dolgok mindig belülről indulnak el.",
   "A legnagyobb öröm az életben megtenni azt, amire az emberek nem tartanak képesnek.",
   "Jobb azt megbánni, hogy megtetted, mint azt, hogy elmulasztottad.",
   "A sikerhez vezető legrövidebb út az, amelyiken elindulsz.",
   "Mindig többre vagy képes, mint hiszed. A legnehezebb kilóméter mindig a legelső.",
   "Félni valamitől nem ok arra, hogy ne tedd meg.",
   "Lesznek dolgok, amiktől tehetetlennek és jelentéktelennek érzed majd magad. De ennyi. Ezek csak érzések. Néha nem szabad érezni, csak tenni kell a dolgod.",
   "Valójában döntés és elhatározás kérdése az életben szinte minden, ami emberi erőfeszítéssel kivitelezhető.",
   "Bármi, ami nem lehetetlen, megtehető, ha az ember valóban rászánja magát arra, hogy megtegye, és eltökélt arra, hogy meg kell tennie.",
   "Mindig érdemes megpróbálni, még ha nem is tökéletes minden, még ha vannak is hibák. Amit meg lehet tenni, azt meg kell tenni.",
   "Ha nem félsz tőle, nem érdemes belevágni.",
   "A lehetetlen nem a felső határ, hanem a kiindulópont a továbblépésre.",
   "Egy problémákkal teli világban légy a megoldás!",
   "Légy optimista, ne add fel a reményt, ha az út túlzottan kemény! Csak nevess-nevess, hogy boldog lehess!",
   "Aki elég őrült ahhoz, hogy elhiggye, hogy meg tudja változtatni a világot, az meg is teszi.",
   "Az élet tele van lehetőségekkel, amelyek csak rád várnak, és vagy élsz velük, vagy félni fogsz tőlük.",
   "Dolgozz keményen, csendben, és hagyd, hogy a sikered beszéljen helyetted!",
   "Ha nem próbálod meg, honnan tudod, hogy meg tudod-e csinálni, vagy sem?",
   "Az élet néha rákényszerít, hogy ugorj, nem lehetsz mindig biztonsági játékos.",
   "Anélkül, hogy próbálkoznánk, erőlködnénk és minduntalan akarnánk - egyszerűen csak csináljuk."
  ]; //Figyelj oda, hogy mindig prímszám legyen az elemszám, jelenleg 29.
  

  function setTomorrow() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0,0,0,0);
    return tomorrow.getTime();
  }

  const setMotivation = () => {
    let today = new Date();
    return (today.getFullYear() * today.getDate() * (today.getMonth() + 1)) % motivations.length;
  }

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>RitaMotivátor</h1>
        </div>
        <div className='context'>
          {motivations[setMotivation()]}
        </div>
        <div className='nextLabel'>
          A következő üzenetig hátralévő idő:
        </div>
        <Countdowntimer countdownTimeStampMs={setTomorrow()}/>
      </div>
      <Footer />
    </>
    
  );
}

export default App;
