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
                v-container
                  template(v-for='(n, i) in 7')
                    v-row(dense)
                      v-col
                        v-hover(v-slot:default="{ hover }" :key='i')
                          v-card(style='background: #3E885B; border-bottom-right-radius: 0px' :elevation="hover ? 8 : 0" hover flat ripple @click.stop="")
                            v-row.pa-4.mr-3(no-gutters style='background: white; border-radius: 0px 200px 0px 0px')
                              v-col
                                v-row(no-gutters)
                                  v-col
                                    span.subtitle-1.font-weight-medium Identificador: 12348859314
                                v-row(no-gutters)
                                  v-col
                                    span.caption II Vara da Juventude do Estado do Paraná
                        v-divider
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
