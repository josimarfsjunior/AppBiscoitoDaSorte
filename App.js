import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));

  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A sorte sorri para quem persevera.',
    'Grandes conquistas começam com pequenos passos.',
    'Seu esforço de hoje será sua vitória de amanhã.',
    'Acredite mais em si mesmo.',
    'Uma nova oportunidade está mais perto do que imagina.',
    'A felicidade cresce quando é compartilhada.',
    'Confie no tempo, ele revela o melhor caminho.',
    'Boas notícias estão a caminho.',
    'Seu talento abrirá portas inesperadas.',
    'A coragem transforma sonhos em realidade.',
    'Hoje é um excelente dia para recomeçar.',
    'Quem planta bondade colhe paz.',
    'Um sorriso sincero muda qualquer dia.',
    'A gratidão atrai novas bênçãos.',
    'Você encontrará inspiração onde menos espera.',
    'A persistência vence o talento sem disciplina.',
    'Uma surpresa agradável iluminará sua semana.',
    'Seu coração conhece a direção certa.',
    'Novos encontros trarão grandes aprendizados.',
    'A paciência fortalece quem sabe esperar.',
    'Seja luz na vida de alguém hoje.',
    'Cada desafio traz uma oportunidade escondida.',
    'A confiança abre caminhos extraordinários.',
    'Seu próximo passo fará toda a diferença.',
    'Boas escolhas constroem grandes histórias.',
    'Valorize os pequenos momentos da vida.',
    'O sucesso acompanha quem não desiste.',
    'A esperança renova todas as manhãs.',
    'Seu melhor ainda está por vir.',
    'A felicidade encontra quem escolhe acreditar.',
  ];

  function quebrabiscoito() {
    setImg(require('./src/biscoitoAberto.png'));

    //sortear uma frase aleatória
    let fraseAleatoria = Math.floor(Math.random() * frases.length);
    setTextoFrase('"' + frases[fraseAleatoria] + '"');
  }

  function reiniciarBiscoito() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={style.container}>
      <Text style={style.txtTitulo}>App Biscoito da Sorte</Text>

      <Image source={img} style={style.img} />

      <Text style={style.txtFrase}>{textoFrase}</Text>

      <TouchableOpacity style={style.botao} onPress={quebrabiscoito}>
        <View style={style.areaBotao}>
          <Text style={style.txtBotao}> Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={reiniciarBiscoito}
      >
        <View style={style.areaBotao}>
          <Text style={[style.txtBotao, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#bdbbb8',
  },
  txtTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#dd7b22',
    margin: 40,
  },
  img: {
    width: 230,
    height: 230,
  },
  txtFrase: {
    color: '#dd7b22',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500',
    margin: 20,
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  areaBotao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
