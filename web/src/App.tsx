import { useEffect, useState } from 'react';
import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo-nlw-esports.png';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import { GameController } from 'phosphor-react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className='max-w-[1344] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className='bg-nlw-gradient bg-clip-text text-transparent'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3x font-black'>
                Publique um anúncio
              </Dialog.Title>
              <Dialog.Content>
                <form>
                  <div className=''>
                    <label htmlFor='game'>Qual o game?</label>
                    <input
                      id='game'
                      type='text'
                      placeholder='Seleciona o game que deseja jogar'
                    />
                  </div>

                  <div className=''>
                    <label htmlFor='name'>Seu nome (ou nickname)</label>
                    <input
                      id='name'
                      type='text'
                      placeholder='Como te chamam dentro do game?'
                    />
                  </div>

                  <div>
                    <div className=''>
                      <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                      <input
                        id='yearsPlaying'
                        type='text'
                        placeholder='Tudo bem ser ZERO'
                      />
                    </div>

                    <div className=''>
                      <label htmlFor='discrod'> Qual o seu Discord?</label>
                      <input
                        id='discrod'
                        type='text'
                        placeholder='Usuario #0000'
                      />
                    </div>

                    <div className=''>
                      <label htmlFor='weekDays'>Quando costuma jogar?</label>
                      <input id='weekDays' type='text' />
                    </div>

                    <div className=''>
                      <label htmlFor='hourStart'>Qual horaário do dia</label>
                      <div className=''>
                        <input id='hourStart' type='time' placeholder='De' />
                        <input id='hourEnd' type='time' placeholder='Até' />
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <input type='checkbox' name='' id='' />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer>
                    <button>Cancelar</button>
                    <button type='submit'>
                    <GameController />Encontrar duo</button>
                  </footer>
                </form>
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
