<template>
<div id="container" @wheel="handleWheel">
<div class="background" :style="{ transform: `translateX(${backgroundOffset})` }">
<!-- confluence -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-plain-wordmark.svg" />
<!-- dbeaver -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" />
<!-- eclipse  -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" />
<!-- Figma -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
<!-- gitHub -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
<!-- Java -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
<!-- JavaScript -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
<!-- Jenkins -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
<!--Jira  -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
<!-- PostgreSQL -->
<img class="main_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
        
</div>
 
  <!-- 정보 박스 -->
  <section class="form-container" :style="boxStyle">
    <span id="arrowClick" class="form-container__arrow"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></span>
    <div class="choose-form">
      <div class="title">
        <h1 class="title__h1" :class="{ 'typing-effect': isBoxVisible }">Welcome<br>Start for free</h1> 
      </div>
      <div class="buttons">
        <a id="signUp" class="buttons__signup" href="#">Sign up</a>
        <a id="login" class="buttons__signup buttons__signup--login" href="#">Login</a>  
      </div>
    </div> 
  </section> 

</div>

<!-- 스크롤 다운 -->
<a href="#" class="scroll-down">
  <div class="scroll">
    <span class="scroll-dot"></span>
  </div>
  <div class="arrow-down"></div>
</a>

</template>
<script setup>
import { ref  } from 'vue';
const backgroundOffset = ref('0px'); // 배경 이미지의 이동 거리

const boxStyle = ref({
  borderRadius: '30px',
  boxShadow: '0 20px 20px rgba(0, 0, 0, .2), 0px 0px 50px rgba(0, 0, 0, .2)',
  position: 'absolute',
  right: '-1000px', // 초기 위치
  top: '50%',
  transform: 'translateY(-50%)',
  overflow: 'hidden',
  width: '500px',
  height: '585px',
  background: '#f3f3f3',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'right 1s ease',
});

const isBoxVisible = ref(false); // 박스가 화면에 보이는지 여부

function handleWheel(event) {
  if (event.deltaY > 0) { // 휠을 내리면
    boxStyle.value.right = '160px'; // 박스를 화면에 보이도록
    backgroundOffset.value = '-300px'; // 배경 이미지 왼쪽으로 이동
    isBoxVisible.value = true; // 박스가 화면에 보이도록 설정
  } else if (event.deltaY <= 0) { // 휠을 올리면
    boxStyle.value.right = '-1000px'; // 박스를 다시 숨김
    backgroundOffset.value = '0px'; // 배경 이미지 원래 위치로 복원
    isBoxVisible.value = false; // 박스가 화면에서 사라지도록 설정
  }

}


</script>
<style scoped>
.background {
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/main/main.png');
  background-size: contain; /* 배경 이미지 크기 조정 */
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s ease; /*배경 이미지 이동 애니메이션 */
  transform: translateX(0); /*초기 위치*/
  position: relative;
}

.main_icon {
  width: 30px;
  height: 30px;
}

#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.typing-effect {
  overflow: hidden; /* Prevents text from overflowing */
  border-right: 0.15em solid #3498db; /* Cursor effect */
  white-space: nowrap; /* Keeps text in a single line */
  animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #3498db; }
}

/* .form-container{
  position: absolute; 
  margin: auto;  
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;  
  width: 380px;
  height: 585px;
  overflow: hidden; 
  box-shadow: 0 20px 20px rgba(0, 0, 0, .2), 0px 0px 50px rgba(0, 0, 0, .2);
  border-radius: 30px;
  background: #f3f3f3; 
}  */

.form-container__arrow{
  position: absolute;
  margin: auto;
  top: 20px;
  right: initial;
  bottom: initial;
  left: -120px;
  width: 10px;
  height: 10px;
  color: #8dabfb;
  z-index: 10; 
  opacity: 1;
  -webkit-transition: left 2s;
  -moz-transition: left 2s;
  -o-transition: left 2s;
  transition: left 2s;
  cursor: pointer;
}

@keyframes fadeInTitle{
  0%{  
    opacity: 0;
  }
  25%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.choose-form{
  position: absolute;
  margin: initial;
  top: initial;
  right: initial;
  bottom: initial;
  left: initial;
  width: inherit;
  height: inherit;
  z-index: 5;
}

.title{
  position: absolute;
  margin: auto;
  top: -62px;
  right: 0;
  bottom: 0;
  left: 0;
  width: inherit;
  height: 100px;
  text-align: center;
  color: #fff; 
  text-shadow: 0 0.3rem 0.5rem #555;
  -webkit-animation: 1.5s fadeInTitle ease;
  -moz-animation: 1.5s fadeInTitle ease;
  -o-animation: 1.5s fadeInTitle ease;
  animation: 1.5s fadeInTitle ease;
  -webkit-transition: opacity 2s;
  -moz-transition: opacity 2s;
  -o-transition: opacity 2s;
  transition: opacity 2s;
}

.title__h1{
  font-weight: 700;
  letter-spacing: .05rem; 
  font-size: 2rem;
}
  
.buttons{
  text-align: center;
  position: absolute;
  margin: auto;
  top: 296px;
  right: 0;
  bottom: 0;
  left: 0;
  width: inherit;
  height: 110px;
  -webkit-animation: 1.5s fadeInTitle ease;
  -moz-animation: 1.5s fadeInTitle ease;
  -o-animation: 1.5s fadeInTitle ease;
  animation: 1.5s fadeInTitle ease;
  -webkit-transition: opacity 2s;
  -moz-transition: opacity 2s;
  -o-transition: opacity 2s;
  transition: opacity 2s;
}

.buttons__signup{
  position: absolute;
  margin: auto; 
  top: -40px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 7px 0;
  border: none; 
  border-radius: 10px;
  width: 200px;
  height: 30px;
  display: block;
  outline: none;
  text-align: inherit;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background: #4f73d9;
  box-shadow: 0 15px 30px rgba(79, 115, 217, .36); 
  -webkit-transition:  bottom 2s;
  -moz-transition:  bottom 2s;
  -o-transition:  bottom 2s;
  transition: bottom 2s;
  cursor: pointer;
} 

.buttons__signup:hover{
  -webkit-transition: .3s linear;
  -moz-transition: .3s linear;
  -o-transition: .3s linear;
  transition: .3s linear;
  box-shadow: 0 0 0 rgba(233, 30, 99, 0);
} 

.buttons__signup--login{
  top: 40px; 
  -webkit-transition:  bottom 1s;
  -moz-transition:  bottom 1s;
  -o-transition:  bottom 1s;
  transition: bottom 1s;
}



/* 위치 설정 */
.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 마우스 모양 만들기 */
.scroll {
  width: 1.5rem;
  height: 3rem;
  border:2px solid black;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 마우스 휠 움직임 */
.scroll span {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: black;
  display: block;
  animation: cursor 1.15s linear infinite;
}

/* 마우스 아래 화살표 */
.arrow-down {
  width: 0.7rem;
  height: 0.7rem;
  border: 2px solid transparent;
  border-right-color: black;
  border-bottom-color: black;
  transform: rotate(45deg);
  margin-top: 0.3rem;
  animation: arrow 1.15s linear infinite;
}

@keyframes cursor {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0.7rem);
  }
}
@keyframes arrow {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>

