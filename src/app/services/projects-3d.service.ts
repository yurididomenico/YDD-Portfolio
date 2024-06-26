import { Injectable } from '@angular/core';
import { Progetto_3D } from '../pages/modellazione3d/projects3D.model';

@Injectable({
  providedIn: 'root'
})
export class Projects3dService {

  constructor() { }

  progetti3d: Progetto_3D[] = [

    new Progetto_3D(
      'Interni',
      'I miei progetti 3D di interni includono un salotto, un bagno, una cucina e una camera da letto.<br><br>Si possono vedere le varie fasi di modellazione degli oggetti 3d fino al raggiungimento del risultato finale.<br>Per quanto riguarda il bagno mi stavo concentrando sulla gestione del materiale, e il gioco di luci ed ombre.<br><br>Invece per la cucina e la stanza da letto, progetto di metà corso e progetto individuale, mi sono esercitato solo sulla modellazione degli oggetti, senza curare troppo giochi di luci e materiali.',
      [
        '../../assets/img/3D/Interni_Salotto_Render_06.png',
        '../../assets/img/3D/Interni_Salotto_Render_10.png',
        '../../assets/img/3D/Interni_Salotto_Render_11.png',
        '../../assets/img/3D/Interni_Salotto_Render_19.png',
        '../../assets/img/3D/Interni_Bagno.png',
        '../../assets/img/3D/Interni_CucinaTemp_05.bmp',
        '../../assets/img/3D/Interni_sta_19.jpg',
        '../../assets/img/3D/Interni_sta_20.jpg',
        '../../assets/img/3D/Interni_sta_21.jpg',
      ]
    ),

    new Progetto_3D(
      'Esterni',
      'I progetti 3D di esterni che ho realizzato includono un arco di foglie (per entrate ristoranti o matrimoni),<br>un municipio, che potrebbe essere utilizzato per videogiochi o anche cartoni animati.<br>Un ulivo, per esercitarmi sulla modellazione complessa (potrebbe essere usato per rendering di esterni di un giardino: posizionarlo vicino alla casa del cliente, realizzata in 3d, per far vedere se un albero potrebbe stare bene o meno in un determinato punto).',
      [
        '../../assets/img/3D/Esterni_ArcoFoglie.png',
        '../../assets/img/3D/Esterni_House.jpg',
        '../../assets/img/3D/Esterni_Ulivo.bmp'
      ]
    ),

    new Progetto_3D(
      'Personaggi Cartoni e Videogiochi',
      `
        Di seguito presenterò tre progetti 3D che rendono omaggio a personaggi iconici di videogiochi e cartoni animati, dimostrando un progressivo miglioramento nelle tecniche di modellazione e texturing:<br><br>Bender (Futurama), Sir Daniel Fortesque (Medievil), Bob-Omb (Super Mario).
      `,
      [
        '../../assets/img/3D/Character_Bender.jpg ',
        '../../assets/img/3D/Character_SirDanielFortesque.jpg ',
        '../../assets/img/3D/Character_Bob.jpg'
      ]
    ),

    new Progetto_3D(
      'Personaggi Fantasy',
      'Dopo aver concluso l\'ennesimo capitolo del mio libro fantasy, ho deciso di realizzare uno dei personaggi con la modellazione 3D:<br><br>si tratta di Alyris, maga altruista che difende e aiuta i suoi amici con naturale destrezza ed eleganza.<br></br>Compagna del protagonista <i>Daryan</i>.',
      [
        '../../assets/img/3D/Character_AlyrisJail.png',
        '../../assets/img/3D/Character_Alyris.jpg',
        ''
      ]
    ),

    new Progetto_3D(
      'Oggetti per Videogiochi',
      'Di seguito illustro cinque modellazioni di oggetti tipici per videogiochi, quali spade, bauli, casette.<br><br>Sono state per me ottime opportunità di crescita nella modellazione 3d: mi hanno permesso di capire come applicare in modo corretto texture e modificatori 3D.',
      [
        '../../assets/img/3D/CharacterMedieval_Baule_01.png',
        '../../assets/img/3D/CharacterMedieval_House_06.png',
        '../../assets/img/3D/Weapon_DiamondSword.JPG',
        '../../assets/img/3D/Weapon_Spada.jpg',
        '../../assets/img/3D/Weapon_SpadaDiamante01.jpg',
        ''
      ]
    ),

    new Progetto_3D(
      'Scacchi',
      'Essendo un appassionato di scacchi (principiante direi) ho realizzato una versione degli scacchi normale, e una leggermente diversa:<br><br>in futuro stamperò con la mia stampante 3d sia la scacchiera che gli scacchi modificati',
      [
        '../../assets/img/3D/Scacchi_Scacchiera.png',
        '../../assets/img/3D/Scacchi_Base.jpg',
        '../../assets/img/3D/Scacchi_Pedone_Base.jpg',
        '../../assets/img/3D/Scacchi_Regina_CaptainMarvel.jpg',
        '../../assets/img/3D/Scacchi_Alfiere.jpg',
        '../../assets/img/3D/Scacchi_Cavallo.jpg',
        '../../assets/img/3D/Scacchi_Pedone.jpg',
        '../../assets/img/3D/Scacchi_Re.jpg',
        '../../assets/img/3D/Scacchi_Regina.jpg',
        '../../assets/img/3D/Scacchi_Squad.jpg',
        '../../assets/img/3D/Scacchi_SquadCopertina.jpg',
        '../../assets/img/3D/Scacchi_Torre.jpg'
      ]
    ),

    new Progetto_3D(
      'Oggetti Vari',
      'Leggendo libri e documentazioni su materiali, modellazione elementale, e luci ho realizzato altri progetti per esercitarmi ed affinare le mie abilità; <br><br>di seguito alcuni di quei progetti:',
      [

        '../../assets/img/3D/Oggetti_Sole.png',
        '../../assets/img/3D/Character_StarCoin.png',
        '../../assets/img/3D/Oggetti_Metallo_Rame_01.png',
        '../../assets/img/3D/Oggetti_Pendule de Newton_01.jpg',
        '../../assets/img/3D/Oggetti_PannelliFotovoltaici_01.png',
        '../../assets/img/3D/Character_DidoBox_07.bmp',
      ]
    ),
  ]
}


/*
  <br>un simpatico personaggio pasticcione che dipinge e modifica il famoso marchio <i>smartbox</i> in <i>Didobox</i>, ho usato questa immagine come copertina regalo per amici (con il quale potrei anche realizzare mini cortometraggi animati),
*/
