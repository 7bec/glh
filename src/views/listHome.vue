<style>
</style>

<template lang='pug'>
  v-app
    v-content.pa-0.ma-0.white(style='height: 100vh;')
      v-container(fluid grid-list-md fill-height align-stretch style='padding-top: 64px;')
        v-row.pt-3(no-gutters justify='center' align='start')
          v-col(style='max-width: 600px;')
            v-fade-transition(hide-on-leave)
              v-card.pa-0(flat v-if='!loadingChilds' color="transparent")
                v-card-title
                  v-icon.mr-2 mdi-account-details
                  span.headline.font-weight-light Varas disponíveis
                v-row(dense justify='space-between' align='center')
                  v-col(cols='auto')
                    v-btn(outlined small to='/primeiroacesso')
                      v-icon(left) mdi-chevron-left
                      span(class='caption text-none') Voltar
                  v-col
                    v-text-field.mx-3(@keyup.enter='' outlined dense append-icon='mdi-magnify' label='Identificador' color="primary" placeholder="Pesquisar por Identificador" hide-details)
                  v-col(cols='auto')
                    v-btn(outlined block small)
                      v-icon(left small) mdi-filter
                      span(class='caption text-none') Filtrar por Vara
                v-container.ma-0.pa-0
                  v-row(dense).ma-0.pa-0
                    v-col(cols='auto').ma-0.pa-0
                      v-checkbox(hide-details label='Crianças maiores de 12 anos' color="primary")
                    v-col(cols='auto').ma-0.pa-0
                      v-checkbox.ml-2(hide-details label='Crianças com deficiência' color="primary")
                v-container
                  template(v-for='(varaItem, i) in varasFilhosList')
                    v-row(dense)
                      v-col
                        v-hover(v-slot:default="{ hover }" :key='i')
                          v-card(@click='openChild(varaItem)' :style="{background: 'rgba(62, 136, 91, 0.'+((varaItem.percentual - 75) * 4)+')'}" style='border-bottom-right-radius: 0px;' :elevation="hover ? 8 : 0" hover flat ripple @click.stop="")
                            v-row.pa-4.mr-3(no-gutters style='background: white; border-radius: 0px 200px 0px 0px')
                              v-col
                                v-row(no-gutters)
                                  v-col
                                    span.subtitle-1.font-weight-medium Identificador: {{varaItem.id_filho}}
                                v-row(no-gutters)
                                  v-col
                                    span.caption {{varaItem.vara}}
                        v-divider
    v-dialog(v-model='showDialog' max-width='600px' scrollable=true)
      v-form()
        v-card
          v-toolbar.white--text(style='background-color: #7bc4d1')
            h4.text-center.title Informações processuais
            v-spacer
            v-btn(icon @click.stop='showDialog = false')
              v-icon(color='white') mdi-close
          v-card-text
            v-row(justify='center' align='center')
              v-col(cols='12').mb-0.pb-0
                span.headline Identificador: {{dialogChild.id_filho}}
              v-col(cols='12').mt-0.pt-0
                span.subtitle-1 Vara: {{dialogChild.vara}}
              v-col(cols='12')
                span.subtitle-1 Endereço: Rua das Águas, 363
              v-divider
              v-col(cols='12')
                p.caption.grey-text Características: {{dialogChild.idade_criança}} anos, sexo {{dialogChild.sexo}}, olho {{dialogChild.cor_olho}}, cabelo {{dialogChild.cor_cabelo}}, cor de pele {{dialogChild.cor_pele}}, {{dialogChild.doenca_tratavel ? 'doença tratável' : 'não possui doença tratável'}}.
          v-card-actions
            v-btn.text-none(text @click.stop='showDialog = false') Cancelar
            v-spacer
            v-btn.text-none(color='#7bc4d1' dark @click.stop='') Entrar em contato com a vara
</template>

<script>
import firebase from 'firebase'
export default {
  fiery:true,
  data () {
    return {
      loadingChilds: false,
      varasList: [],
      varasFilhosList: [],
      showDialog: false,
      dialogChild: {}
    }
  },
  async mounted() {
    const self = this
    await this.$fiery(firebase.firestore().collection('pai_filho'), {
      query: q => q.where('percentual', '>', 75).orderBy('percentual', 'desc'),
      onSuccess: async (varasList) => {
        console.log(varasList)
        for (let i = 0; i < varasList.length; i++) {
          console.log('aaaaaa')
          await self.$fiery(firebase.firestore().collection('filhos').doc(varasList[i].filho_id), {
            onSuccess: (filhoObject) => {
              let objectAux = {...varasList[i], ...filhoObject }
              // let objectAux = Object.assign(varasList[i], filhoObject)
              console.log(objectAux)
              self.varasFilhosList.push(objectAux)
            }
          })
        }
        console.log(self.varasFilhosList)     
      }
    })
  },
  methods: {
    openChild (varaItem) {
      console.log(varaItem)
      this.showDialog = true
      this.dialogChild = varaItem
    }
  }
};
</script>
