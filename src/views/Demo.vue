<template>
    <div style="height: 100%; background-color: #FBFBFF; ">
        <v-container style="padding-top: 64px;">
            <v-row  class="mb-6" style="width:100%;">
                <v-col md="4">
                    <h3 class="text-center">Pais</h3>
                    <v-list  class="pa-0">
                        <v-list-item style="border: 1px solid black;" v-for="(pai, i) in pais" :key="i">
                            <v-card :color="pai.color" v-if="pai.color==='transparent'" style="width:100%;">
                                {{pai.nome_adotante}}
                                 
                            </v-card>  
                            <v-card :color="pai.color" v-else style="color:white; width:100%; height:100%;" >
                                {{pai.nome_adotante}}
                                 
                            </v-card>    
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col 
                md="4"
                offset-md="4" 
                >
                <h3 class="text-center">Filhos</h3>
                    <!-- <v-card-title style="color:white;" >Filhos</v-card-title> -->
                    <v-list class="pa-0" >
                        <v-list-item style="border: 1px solid black;" v-for="(filho, i) in filhos" :key="i" class="pa-0">
                            <v-card :color="filho.color" v-if="filho.color==='transparent'" style="width:100%;">
                                 {{filho.nome_criança}}
                                 
                            </v-card>  
                            <v-card :color="filho.color" v-else style="color:white; width:100%; height:100%;" >
                                 {{filho.nome_criança}}
                                 
                            </v-card>    
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container> 
    </div>     
</template>

<script>
import firebase from 'firebase'
export default {
    fiery:true,
    data(){
        return{
            pais: this.$fiery(firebase.firestore().collection('pais')),
            filhos:this.$fiery(firebase.firestore().collection('filhos')),
            white:{ 
                color: 'white',
                width:'100%'
            },
            black:{ 
                color: 'black',
                width:'100%'
            }

        }
    }
}
</script>

<style>

</style>