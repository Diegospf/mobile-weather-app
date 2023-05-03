# WeatherApp em React Native 🌞
Este é um aplicativo de clima desenvolvido em React Native utilizando a plataforma Expo. O aplicativo permite que os usuários visualizem informações sobre o clima de uma determinada cidade, incluindo a temperatura atual, a previsão do tempo para os próximos dias, bem como informações sobre a umidade, velocidade do vento e outras informações.

## Como Instalar e Executar o Projeto React/Expo 🔨
Para instalar e rodar o projeto Expo/React, siga os seguintes passos:

* Instale as dependências. Para isso, execute o comando **npm install** no diretório raiz do projeto.
* Execute o comando **npm start** para iniciar o projeto Expo/React.
* Escaneie o código QR gerado pelo Expo com o aplicativo Expo Go em seu smartphone para visualizar o aplicativo em seu dispositivo. Ou utilize um emulador para visualizar na sua máquina.

## ⚠️Aviso sobre o Limite de Requisições⚠️
Este aplicativo utiliza a API gratuita do OpenWeatherMap para obter as informações sobre o clima. No entanto, a API possui um limite de requisições por IP, sendo necessária uma nova rede para ter acesso as requisições. Caso este limite seja atingido, o aplicativo utilizará um mock com dados fictícios para exibir as informações.

## Prints da Interface 🖥️
A seguir estão algumas imagens que mostram as principais telas do aplicativo de clima:
* Splash, Início com seleção de Estado, Próximas Horas(Hoje), Próximas Previsões - Esse tema Azul Claro se refere as seguintes conditions da API: clear_day, cloudly_day, none_day.
<p>
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/splash.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/home.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/forecast.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/selectLocation.jpeg" width="20%" />
</p>

* PopUp para detalhes ao clicar em algum dos Próximos Dias:
<p>
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/popup1.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/popup2.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/popup3.jpeg" width="20%" />
</p>

* Tema Azul Escuro referente as seguintes conditions da API: rain, storm, clear_night, cloudly_night, none_night.
<p>
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/BgBlue.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/BgBlueForecast.jpeg" width="20%" />
</p>

* Tema Escuro referente as seguintes conditions da API: hail, snow, fog, cloud.
<p>
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/bgDark.jpeg" width="20%" />
<img src="https://github.com/Diegospf/mobile-weather-app/blob/main/images/bgDarkForecast.jpeg" width="20%" />
</p>
