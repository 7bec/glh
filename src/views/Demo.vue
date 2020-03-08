<template>
    <v-container>
        <v-row  class="mb-6" style="width:100%;">
            <v-col md="4">
                <v-card
                    max-width="500"
                    class="mx-auto"

                >
                <v-card-title style="color:white;" >Pais</v-card-title>
                    <v-list >
                        <v-list-item  v-for="(pai, i) in pais" :key="i">
                        <v-flex>
                            {{pai.nome_adotante}}
                            <v-divider/>
                        </v-flex>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col  md="4"
        offset-md="4" >
                <v-card
                    max-width="500"
                    class="mx-auto"
                    color="black"
                >
                <v-card-title style="color:white;" >Filhos</v-card-title>
                    <v-list >
                        <v-list-item  v-for="(filho, i) in filhos" :key="i">
                        <v-flex>
                        {{filho.nome_criança}}
                        <v-divider/>
                        </v-flex>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>      
</template>

<script>
import firebase from 'firebase'
export default {
    fiery:true,
    data(){
        return{
            pais: this.$fiery(firebase.firestore().collection('pais')),
            filhos:this.$fiery(firebase.firestore().collection('filhos')),
            
        }
    }
}
</script>

<style>

</style>