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
                  v-icon.mr-2 mdi-archive
                  span.headline.font-weight-light Crianças em promoção
                v-row(dense justify='space-between' align='center')
                  v-col(cols='auto')
                    v-btn(outlined small)
                      v-icon(left) mdi-chevron-left
                      span(class='caption text-none') Voltar
                  v-col
                    v-text-field.mx-3(@keyup.enter='' outlined dense append-icon='mdi-magnify' label='Modelos' color="primary" placeholder="Pesquisar modelo" hide-details)
                  v-col(cols='auto')
                    v-btn(outlined block small)
                      v-icon(left small) mdi-plus
                      span(class='caption text-none') Criar modelo
                v-container
                  v-row(dense)
                    v-col(cols='auto')
                      v-checkbox(label='Grátis' color="primary")
                  v-divider
                  template(v-for='(n, i) in 5')
                    v-row(dense)
                      v-col
                        v-hover(v-slot:default="{ hover }" :key='i')
                          v-card.transparent.pa-2(:elevation="hover ? 8 : 0" hover flat ripple @click.stop="")
                            v-row(no-gutters)
                              v-col
                                span.subtitle-1.font-weight-medium Opa eai vei
                            v-row(no-gutters)
                              v-col
                                span.caption Área: area do bagulho
                            v-row(no-gutters)
                              v-col
                                span.caption 10 reais
                      v-col(cols='auto')
                        v-row.pt-1(dense justify='end')
                          v-col(cols='auto')
                            span.caption opa
                        v-row(dense)
                          v-col.d-flex(cols='auto')
                            v-tooltip(bottom)
                              template(v-slot:activator='{ on }')
                                v-hover(v-slot:default="{ hover }")
                                  v-card.transparent.d-flex.flex-column.align-stretch.justify-center.pa-2.mt-2.ml-2(v-on='on' :elevation="hover ? 8 : 0" hover flat ripple @click.stop='')
                                    v-icon() mdi-pencil
                              span Editar
                          v-col.d-flex(cols='auto')
                            v-tooltip(bottom)
                              template(v-slot:activator='{ on }')
                                v-hover(v-slot:default="{ hover }")
                                  v-card.transparent.d-flex.flex-column.align-stretch.justify-center.pa-2.mt-2.ml-2(v-on='on' :elevation="hover ? 8 : 0" hover flat ripple @click.stop='')
                                    v-icon(color='blue') mdi-share-variant
                              span Compartilhar
                          v-col.d-flex(cols='auto')
                            v-tooltip(bottom)
                              template(v-slot:activator='{ on }')
                                v-hover(v-slot:default="{ hover }")
                                  v-card.transparent.d-flex.flex-column.align-stretch.justify-center.pa-2.mt-2.ml-2(v-on='on' :elevation="hover ? 8 : 0" hover flat ripple @click.stop='')
                                    v-icon(color='red') mdi-delete
                              span Excluir

</template>

<script>
export default {
  data () {
    return {
      loadingChilds: false,
    }
  },
};
</script>
