<template>
    <div style="height: 100%; background-color: #FBFBFF; display: flex; align-items: center;">
        <v-container style="padding-top: 64px; max-width: 500px;">
            <v-layout  column>
                <v-layout>
                    <v-flex>
                        <h3>Preencha os campos abaixo:</h3>
                    </v-flex>
                </v-layout>
                <v-flex>
                    <v-text-field
                        label="Nome do adotante"
                        v-model="adotante"
                    ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-text-field
                        label="Idade"
                        v-model="idade"
                    ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-text-field
                        label="ID"
                        v-model="ID"
                    ></v-text-field>
                </v-flex>
                <v-flex text-center>Características da criança
                </v-flex>
                <v-flex>
                    <v-text-field
                        label="Nome da criança"
                        v-model="nomeCrianca"
                    ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-select
                    :items="tipoIdadeCrianca"
                    label="Idade criança"
                    v-model="idadeCrianca"
                    ></v-select>
                </v-flex>
                <v-flex>
                    <v-select
                    :items="tipoCorOlho"
                    label="Cor dos olhos"
                    v-model="corOlho"
                    ></v-select>
                </v-flex>
                <v-flex>
                    <v-select
                    :items="tipoCorCabelo"
                    label="Cor do cabelo"
                    v-model="corCabelo"
                    ></v-select>
                </v-flex>
                <v-flex>
                    <v-select
                    :items="tipoSexo"
                    label="Sexo"
                    v-model="sexo"
                    ></v-select>
                </v-flex>
       
                <v-flex mt-2>
                    <v-layout>
                        <v-spacer></v-spacer>
                        <v-btn @click="finish()">
                            Cadastrar
                        </v-btn>
                    </v-layout>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-dialog
                v-model="confirmDialog"
                >
                    <v-card>
                        <v-card-text style="font-weight: 500; font-size: 1.5em; color: black; padding-top: 16px; padding-bottom: 10px;">Cadastrado!</v-card-text>


                        <v-card-text>
                        Ocorrência confirmada! Os agentes mais próximos dos órgãos selecionados serão direcionados ao local em instantes.
                        </v-card-text>

                        <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="goHome()"
                        >
                            Voltar à página principal
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
    </div>
    
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            pais: this.$fiery(firebase.firestore().collection('pais')),
            filhos:this.$fiery(firebase.firestore().collection('filhos')),
            adotante:'',
            idade:'',
            nomeCrianca:'',
            ID:'',
            idadeCrianca:'',
            tipoIdadeCrianca:['velha','nova'],
            corOlho:'',
            tipoCorOlho:['azul','verde','preto foda-se'],
            tipoCorCabelo:['loiro','preto','castanho'],
            corCabelo:'',
            tipoSexo:['masculino','feminino'],
            sexo:'',
            confirmDialog: false,

        }
    },
    methods: {
 
        finish () {
            // var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            // var today = new Date();
            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            // var number = Math.floor(100000000 + Math.random() * 900000000);
            this.$fires.pais.add({
                // number: number,
                creation_timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                // creation_date : date,
                // creation_time: time,
                nome_adotante: this.adotante,
                idade_adotante: this.idade,
                numProcesso: this.ID 

            })
            this.$fires.filhos.add({
                // number: number,
                nome_criança:this.nomeCrianca,
                creation_timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                idade_criança:this.idadeCrianca,
                cor_olho: this.corOlho,  
                cor_cabelo: this.corCabelo,
                sexo:this.sexo,   
                color: 'transparent',
                active: 'false'
            })
            this.nomeCrianca=''
            this.adotante=''
            this.idade=''
            this.ID=''
            this.idadeCrianca=''
            this.corOlho=''
            this.corCabelo=''
            this.sexo=''

        },

        goHome(){
            this.$router.push('/gerente')
        }
       
    }
}
</script>