Este é um novo projeto em [**React Native**](https://reactnative.dev), inicializado utilizando o [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Primeiros Passos

> **Nota**: Certifique-se de ter concluído o guia de [Configuração do Ambiente](https://reactnative.dev/docs/set-up-your-environment) antes de prosseguir.

## Passo 1: Iniciar o Metro

Primeiro, você precisará executar o **Metro**, a ferramenta de build JavaScript para o React Native.

Para iniciar o servidor de desenvolvimento do Metro, execute o seguinte comando a partir da raiz do seu projeto React Native:

```sh
# Usando npm
npm start

# OU usando Yarn
yarn start
```

## Passo 2: Compilar e executar seu aplicativo

Com o Metro em execução, abra uma nova janela ou aba de terminal na raiz do seu projeto React Native e use um dos comandos a seguir para compilar e executar seu aplicativo Android ou iOS:

### Android

```sh
# Usando npm
npm run android

# OU usando Yarn
yarn android
```

### iOS

Para iOS, lembre-se de instalar as dependências do CocoaPods (isso só precisa ser feito no primeiro clone ou após atualizar dependências nativas).

Na primeira vez que criar um novo projeto, execute o bundler do Ruby para instalar o próprio CocoaPods:

```sh
bundle install
```

Em seguida, e sempre que atualizar suas dependências nativas, execute:

```sh
bundle exec pod install
```

Para mais informações, visite o [guia de primeiros passos do CocoaPods](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado corretamente, você deverá ver seu novo aplicativo sendo executado no Emulador Android, no Simulador iOS ou no seu dispositivo conectado.

Esta é uma maneira de executar seu aplicativo — você também pode compilá-lo diretamente pelo Android Studio ou Xcode.

### Experiência Desenvolvida – Aplicativo Biscoito da Sorte

Desenvolvi um aplicativo mobile denominado **Biscoito da Sorte** utilizando **React Native** e **JavaScript**, com o objetivo de consolidar conhecimentos em desenvolvimento de aplicações multiplataforma.

Durante o projeto, implementei interfaces responsivas utilizando componentes nativos do React Native, realizando o gerenciamento de estado por meio do **Hook `useState`**, permitindo a atualização dinâmica da interface conforme a interação do usuário.

O aplicativo foi desenvolvido com funcionalidades como geração aleatória de mensagens motivacionais, alteração dinâmica de imagens conforme a ação do usuário, reinicialização do estado da aplicação e tratamento de eventos através de componentes interativos como **TouchableOpacity**.

Além da implementação da lógica de negócio, utilizei **StyleSheet** para organização dos estilos da aplicação, seguindo boas práticas de estruturação de código, separação de responsabilidades e reutilização de componentes.

### Tecnologias utilizadas

- React Native
- JavaScript (ES6+)
- React Hooks (`useState`)
- Componentes nativos (View, Text, Image e TouchableOpacity)
- StyleSheet
- Manipulação de estados e renderização condicional
- Lógica de programação (sorteio aleatório de frases)
- Desenvolvimento de interfaces mobile responsivas

Esse projeto proporcionou experiência prática na criação de aplicações móveis, fortalecendo conhecimentos em desenvolvimento front-end mobile, gerenciamento de estado, experiência do usuário (UX) e organização de código para aplicações React Native.
