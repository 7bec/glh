<style>
.talk-bubble {
	margin: 40px;
  padding: 40px;
  display: inline-block;
  position: relative;
  width: 100%;
	height: auto;
}
.border{
  border: 3px solid #B700A5;
}
.round{
  border-radius: 30px;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;

}
.bubble {
  transition: 0.5s;
}
/*Right triangle, placed bottom right side slightly in*/
.tri-right.border.btm-right-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
  right: 33px;
  bottom: -32px;
  border: 15px solid;
	border-color: #b700a5 #B700A5 transparent transparent;
}
.tri-right.btm-right-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 38px;
	bottom: -20px;
	border: 12px solid;
	border-color: white white transparent transparent;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>

<template lang='pug'>
  v-app
    v-content.pa-0.ma-0.white(style='height: 100vh')
      v-container(fill-height)
        v-row(justify='center' align='center' :style='step < 2 ? "height: 60%" : "height: 100%"')
          v-col(sm=10 md=9 lg=8)
            div(:class="step <= 1 ? 'talk-bubble tri-right border round btm-right-in' : ''" class='bubble')
              div(:class="step <= 1 ? 'talktext' : ''" class='bubble')
                div.display-1.font-weight-bold(style='color: #B700A5') {{msgShow}}
                v-form.mt-4(ref='form' v-model='valid')
                  v-scale-transition(hide-on-leave)
                    v-text-field(v-show="step === 2" ref='numProc' block @keyup.enter="sendNumProc()" v-model='numProc' v-mask='numProcMask' :rules='requiredRules' label='Número do processo' color="#B700A5" outlined)
                  v-container
                    v-row(justify='end' dense)
                      v-col(cols='auto')
                        v-scale-transition(hide-on-leave)
                          v-btn.mt-3.medium(v-show="step === 2" :disabled='typingPhrase' color="#B700A5" dark @click='sendNumProc()' style='font-family: Montserrat,sans-serif; font-weight: 400') Continuar
                        v-scale-transition(hide-on-leave)  
                          v-btn.mt-3.medium(v-show="step === 3" :disabled='typingPhrase' color="#B700A5" dark @click='toList()' style='font-family: Montserrat,sans-serif; font-weight: 400') Buscar!
        v-row.ma-0.pa-0(justify='end' align='center')
          img(v-if='step == 0' style='height: 40vh;' src='../../imagens/acenando.png')
          transition(name='fade-out')  
            img(v-if='step == 1' style='height: 40vh;' src='../../imagens/fofo.png')
      v-dialog(v-model="isLoading" width="300" persistent)
        v-card.white
          v-card-text.pt-5(style='color: #B700A5')
            v-row(justify='center')
              v-col
                v-col(align='center')
                  vue-loaders(name="line-scale-pulse-out" color="#B700A5" scale="1")
                v-col(align='center')
                  span.subheading Realizando verificação...
</template>

<script>
import { mask } from 'vue-the-mask'
import firebase from 'firebase'
import axios from 'axios'
export default {
  fiery: true,
  directives: {
    mask
  },
  data () {
    return {
      msgShow: '',
      typingPhrase: false,
      step: 0,
      numProc: '',
      numProcSend: '',
      valid: true,
      requiredRules: [
        v => !!v || 'Campo obrigatório'
      ],
      numProcMask: '#######-##.####.#.##.####',
      isLoading: false,
    }
  },
  async mounted () {
    await this.firstAccessSteps()
  },
  methods: {
    async toList () {
      const self = this
      var intProc = parseInt(this.numProcSend)
      console.log(intProc)
      await firebase.firestore().doc(`config/index`).set({ active: true, numProcesso: intProc }, { merge: true })
      this.$router.push('/listHome')
    },
    async sendNumProc () {
      const self = this
      this.isLoading = true
      await this.searchForProccess()
    },
    async searchForProccess () {
      setTimeout(() => {
        this.$fiery(firebase.firestore().collection('pais'), {
          query: m => m.where('numProcesso', '==', this.numProc),
          onSuccess: async (doc) => {
            this.isLoading = false
            this.numProcSend = this.numProc
            await this.nextStep()
          }
        })
      }, 1000) 
    },
    async firstAccessSteps () {
      await this.typePhrase(`Olá, bem-vindo ao Adote. `, 700, false)
      await this.typePhrase(`É um prazer lhe conhecer!`, 900)
      this.step++
      await this.typePhrase(`Para poder lhe ajudar, precisamos de algumas informações...`, 1900)
      this.nextStep()
    },
    async nextStep () {
      this.step++
      await this.showStep()
    },
    async showStep () {
      this.typingPhrase = true
      this.msgShow = ''
      switch (this.step) {
        case 2:
          await this.typePhrase(`Qual o número do seu processo de adoção?`, 300, false)
          this.$nextTick(() => this.$refs.numProc.focus())
          break
        case 3:
          await this.typePhrase(`Ok! Achamos seu cadastro, clique para continuar!`, 300, false)
          this.$nextTick(() => this.$refs.buscaInit.focus())
          break
        default:
          console.info('default switch')
          break
      }
    },
    async waitTime (time) {
      await new Promise(resolve => setTimeout(resolve, time))
    },
    async typePhrase (msg, timeWait, clear) {
      for (const character of msg) {
        this.msgShow += `${character}`
        await this.waitTime(30)
      }
      await this.waitTime(timeWait || 900)
      if (typeof clear === 'undefined' || clear === true) {
        this.msgShow = ''
      }
      this.typingPhrase = false
    },
  }
};
</script>
