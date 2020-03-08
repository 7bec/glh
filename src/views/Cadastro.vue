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
                    <v-flex>
                        <v-select
                        :items="qtdCriancas"
                        label="Quantas crianças deseja adotar?"
                        v-model="qtdCrianca"
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
                        v-model="tipo_cabelo"
                        ></v-select>
                    </v-flex>
                    <v-flex>
                    <v-flex >
                        Faixa etária
                        <v-flex style="width:30%;">

                        <v-text-field
                        label="De"
                        v-model="de"
                        ></v-text-field>
                        </v-flex>
                        <v-flex>

                        <v-text-field
                        style="width:30%;"
                        label="Até"
                        v-model="ate"
                        >
                        </v-text-field>
                        </v-flex>
                    </v-flex>
                        <v-select
                        :items="tipoSexo"
                        label="Sexo"
                        v-model="sexo"
                        ></v-select>
                    </v-flex>  
                    <v-flex>
                        <v-select
                        :items="tipoRaça"
                        label="Raça/Cor"
                        v-model="cor_pele"
                        ></v-select>
                    </v-flex>
                    <v-flex>
                        <v-checkbox hide-details v-model="pcd" label="PCD" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="hiv" label="HIV" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="doenca_tratavel" label="Doença tratável" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="doenca_intratavel" label="Doença intratável" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="deficiencia_mental" label="Deficiência mental" :value="true"></v-checkbox>
                    </v-flex>
                    <v-flex mt-2>
                        <v-layout>
                            <v-spacer></v-spacer>
                            <v-btn @click="finish1()">
                                Cadastrar
                            </v-btn>
                        </v-layout>
                        
                    </v-flex>
                </v-flex>
                <v-flex>

                    <v-flex text-center>Características da criança
                    </v-flex>
                    <v-flex>
                        <v-text-field
                            label="Nome da criança"
                            v-model="nomeCrianca"
                        ></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field
                            label="Idade da criança"
                            v-model="idade_criança"
                        ></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-select
                        :items="tipoCorOlho"
                        label="Cor dos olhos"
                        v-model="corOlho2"
                        ></v-select>
                    </v-flex>
                    <v-flex>
                        <v-select
                        :items="tipoCorCabelo"
                        label="Cor do cabelo"
                        v-model="tipo_cabelo2"
                        ></v-select>
                    </v-flex>
                    <v-flex>
            
                        <v-select
                        :items="tipoSexo"
                        label="Sexo"
                        v-model="sexo2"
                        ></v-select>
                    </v-flex>  
                    <v-flex>
                        <v-select
                        :items="tipoRaça"
                        label="Raça/Cor"
                        v-model="cor_pele2"
                        ></v-select>
                    </v-flex>
                    <v-flex>
                        <v-checkbox hide-details v-model="pcd2" label="PCD" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="hiv2" label="HIV" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="doenca_tratavel2" label="Doença tratável" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="doenca_intratavel2" label="Doença intratável" :value="true"></v-checkbox>
                        <v-checkbox hide-details v-model="deficiencia_mental2" label="Deficiência mental" :value="true"></v-checkbox>
                    </v-flex>
        
                    <v-flex mt-2>
                        <v-layout>
                            <v-spacer></v-spacer>
                            <v-btn @click="finish2()">
                                Cadastrar
                            </v-btn>
                        </v-layout>
                        
                    </v-flex>
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
            idade_criança:'',
            faixa_etaria:'',
            corOlho:'',
            tipoCorOlho:['azul','verde','preto'],
            tipoCorCabelo:['loiro','preto','castanho'],
            tipo_cabelo:'',
            tipoSexo:['masculino','feminino','indiferente'],
            sexo:'',
            confirmDialog: false,
            cor_pele:'',
            tipoRaça:['Preta','Branca','Amarela','Parda','Indígena','Indiferente'],
            pcd:false,
            hiv:false,
            doenca_tratavel:false,
            doenca_intratavel:false,
            deficiencia_mental:false,
            de:'',
            ate:'',
            qtdCriancas:['1','2','3','4','5','6','7 ou mais'],
            qtdCrianca:'',
            corOlho2:'',
            tipoCorOlho2:['azul','verde','preto'],
            tipoCorCabelo2:['loiro','preto','castanho'],
            tipo_cabelo2:'',
            tipoSexo2:['masculino','feminino','indiferente'],
            sexo2:'',
            confirmDialog: false,
            cor_pele2:'',
            tipoRaça2:['Preta','Branca','Amarela','Parda','Indígena','Indiferente'],
            pcd2:false,
            hiv2:false,
            doenca_tratavel2:false,
            doenca_intratavel2:false,
            deficiencia_mental2:false,

        }
    },
    methods: {
 
        finish1 () {
            this.$fires.pais.add({
                creation_timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                nome_adotante: this.adotante,
                idade_adotante: this.idade,
                numProcesso: this.ID,
                qtd_crianca: this.qtdCrianca,
                cor_olho: this.corOlho,  
                cor_cabelo: this.tipo_cabelo,
                cor_pele: this.cor_pele,
                pcd:this.pcd,
                hiv:this.hiv,
                doenca_tratavel: this.doenca_tratavel,
                doenca_intratavel:this.doenca_intratavel,
                deficiencia_mental:this.deficiencia_mental,
                sexo:this.sexo,   
                color: 'transparent',
                active: 'false',
                idade_min: parseInt(this.de),
                idade_max: parseInt(this.ate),
                
            })

            this.nomeCrianca=''
            this.adotante=''
            this.idade=''
            this.ID=''
            this.idadeCrianca=''
            this.corOlho=''
            this.corCabelo=''
            this.sexo=''
            this.de=''
            this.ate=''
            this.deficiencia_mental=false
            this.doenca_intratavel=false
            this.doenca_tratavel=false
            this.hiv=false
            this.pcd=false
            this.cor_pele=''
        },
        finish2 () {
            this.$fires.filhos.add({
                creation_timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                nome_criança:this.nomeCrianca,
                idade_criança: parseInt(this.idade_criança),
                cor_olho: this.corOlho2,
                 cor_cabelo: this.tipo_cabelo2,
                cor_pele: this.cor_pele2,
                pcd:this.pcd2,
                hiv:this.hiv2,
                doenca_tratavel: this.doenca_tratavel2,
                doenca_intratavel:this.doenca_intratavel2,
                deficiencia_mental:this.deficiencia_mental2,
                sexo:this.sexo2,   
                color: 'transparent',
                active: 'false'
            })
            
            this.corOlho2=''
            this.corCabelo2=''
            this.sexo2=''
            this.deficiencia_mental2=false
            this.doenca_intratavel2=false
            this.doenca_tratavel2=false
            this.hiv2=false
            this.pcd2=false
            this.cor_pele2=''
            this.idade_criança=''
        },

        goHome(){
            this.$router.push('/gerente')
        }
       
    }
}
</script>