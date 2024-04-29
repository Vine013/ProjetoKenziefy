/**
 * variaveis
 * funções
 * loop
 * condicionais
 */

//variaveis
    const nome = 'vinicin';
    let idade = 21;

    //console.log(nome);
    //console.log(idade);

    idade = 22;
    //console.log(idade);
    // nome = 'vinu'; => retorna um erro

// funções

    // delcaração de função
    function imprimirNome(){
        //console.log(nome);
    }

    // executando a função
    // imprimirNome();

// loop
    for(let contador = 0; contador < 5; contador++){
        //console.log(contador);
    }

// condicionais
    if(idade > 18){
        //console.log('atingiu a maioridade')
    } else {
        //console.log('Não atingiu a maioridade')
    }
/*-----------------------------------------------------------*/


const baseMusics = [
    {
        'name': 'Diz aí qual é o plano',
        'artist': 'Mc Ig, Luki, GP, Ryan, PH, Poze, Oruam, Traplaudo, GH, Nego Micha',
        'path': './SONGS/Diz aí qual é o plano_ - Mc Ig, Luki, GP, Ryan, PH, Poze, Oruam, Traplaudo, GH, Nego Micha (TMOIG).mp3',
        'album': 'Todo Mundo Odeia o Ig',
    },
    {
        'name': 'Deus, por favor',
        'artist': 'Mc Ig, Mc Kevin, Mc Ph',
        'path': './SONGS/MC KEVIN, MC IG, MC PH - DEUS, POR FAVOR (DJ WN) [FAIXA 6 TMOIG _!%].mp3',
        'album': 'Todo Mundo Odeia o Ig',
    },
    {
        'name': 'Olá Moça',
        'artist': 'Mc Ig e Veigh',
        'path': './SONGS/MC IG, VEIGH - OLÁ, MOÇA (HONAISER, GALDINO, TOLEDO, BVGA) [FAIXA 5 TMOIG _!%].mp3',
        'album': 'Todo Mundo Odeia o Ig',
    }
    
]

/**
 *  <li>
        <p class="Item">Diz aí qual é o plano?</p>
        <p>Mc Ig, Luki, GP, Ryan, PH, Poze, Oruam, Traplaudo, GH, Nego Micha</p>
        <p>Todo Mundo Odeia o Ig</p>
    </li>
    <li>
        <p class="Item">Deus, por favor</p>
        <p>Mc Ig, Mc Kevin, Mc Ph</p>
        <p>Todo Mundo Odeia o Ig</p>
    </li>
    <li>
        <p class="Item">Olá Moça</p>
        <p>Mc Ig e Veigh</p>
        <p>Todo Mundo Odeia o Ig</p>
    </li>
 */

    const List = document.querySelector('.List');

    const audio = document.getElementById('audio');
    const firstSong = baseMusics[0];
    audio.src = firstSong.path;

    console.log(audio);

    const pauseButton = document.getElementById('ButtonPause');

function Playlist(music, musicId){
    const musicElement = document.createElement('li');
    const nameMusic = document.createElement('p');
    const nameArtist = document.createElement('p');
    const nameAlbum = document.createElement('p');

    musicElement.dataset.id = musicId;

    nameMusic.className = 'Item';
    nameMusic.innerText = music.name;
    nameArtist.innerText = music.artist;
    nameAlbum.innerText = music.album;

    musicElement.appendChild(nameMusic);
    musicElement.appendChild(nameArtist);
    musicElement.appendChild(nameAlbum);

    musicElement.addEventListener('click', playSong);

    List.appendChild(musicElement);
}


for(let contador = 0; contador < baseMusics.length; contador++){
    Playlist(baseMusics[contador], contador);
}

function playSong(event){
    const clickedElement = event.currentTarget;
    const musicId = clickedElement.dataset.id;

    const selectedMusic = baseMusics[musicId];
    audio.src = selectedMusic.path;
    audio.play();
}

function pauseSong(){
    audio.pause();
}

pauseButton.addEventListener('click', pauseSong);