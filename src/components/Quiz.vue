<template>
  <div class="hello">
    <h1 :class="[score > 1 ? 'diatasKKM' : 'dibawahKKM']">Nilai : {{ score }}</h1>
    <h2 v-if="score > 1">Berhasil, kamu keren</h2>
    <h2 v-else>Gagal, Ayo !!! , jangan patah semangat</h2>
    <div v-for="(soal, indexsoal) in questions">
      <h2>No {{indexsoal+1}}. {{soal.deskripsi}} </h2>
      <div v-for="(pilihans, indexpiilhan) in soal.pilihan">
        <input type="radio" @click="checkAnswer(indexsoal, indexpiilhan)" :value="pilihans[0]" :name="indexsoal">
        <span v-text="pilihans[0]"></span>
      </div>
    </div>
  </div>
</template>

<script>

import Soal from '@/components/Quiz'
export default {
  name: 'HelloWorld',
  components:{
    Soal
  },
  data () {
    return {
      score: 0,
      benar : [],
      salah : [],
      questions : [
        {
          deskripsi : "99 x 0 = ...",
          pilihan : [
            ["9"],
            ["99"],
            ["90"],
            ["0", true]
          ]
        },
        {
          deskripsi : "Daerah Istimewa Yogyakarta berada di provinsi ...",
          pilihan : [
            ["Jawa Timur"],
            ["Kalimantan Barat"],
            ["Jawa Tengah", true],
            ["Sumatra"]
          ]
        },
        {
          deskripsi : "Apa yang datang dan tidak pernah kembali ...",
          pilihan : [
            ["Reziki"],
            ["Jelangkung"],
            ["Bang Toyib"],
            ["Kematian", true]
          ]
        },
        {
          deskripsi : "Siapakah presiden Republik Indonesia yang ke-2 ?",
          pilihan : [
            ["Soekarno"],
            ["A. Wahid"],
            ["B.J. Habiebie"],
            ["Soeharto", true]
          ]
        },
        {
          deskripsi : "Suku yang berada di Jawa Barat adalah ...",
          pilihan : [
            ["Batak"],
            ["Jawa"],
            ["Sunda", true],
            ["Amborigin"]
          ]
        },
        {
          deskripsi : "Sungai terpanjang di Indonesia adalah ...",
          pilihan : [
            ["Citarum"],
            ["Kapuas", true],
            ["Serayu"],
            ["Digul"]
          ]
        },
        {
          deskripsi : "Tempat yang sering dikunjingi oleh turis adalah ...",
          pilihan : [
            ["Yogyakarta"],
            ["Bali", true],
            ["Jakarta"],
            ["Bandung"]
          ]
        },
        {
          deskripsi : "Pada zaman dahulu Jakarta disebut Kota ... oleh para penjajahan.",
          pilihan : [
            ["Ibu kota"],
            ["DKI Jakarta"],
            ["Batavia", true],
            ["Walanda"]
          ]
        },
        {
          deskripsi : "Kapan Indonesia merdeka ? ",
          pilihan : [
            ["17 Agustus 1955"],
            ["17 Juni 1945"],
            ["17 Agustus 1945", true],
            ["17 Juli 1945"]
          ]
        },
        {
          deskripsi : "Siapakah keturunan Ir.Soekarno yang menjadi presiden ? ",
          pilihan : [
            ["Guruh "],
            ["Sukmawati"],
            ["Guntur"],
            ["Megawati", true]
          ]
        },
      ]
    }
    },

    methods: {

      checkAnswer(indexsoal, indexpiilhan) {
        if(this.questions[indexsoal].pilihan[indexpiilhan][1]){
          if(this.benar.indexOf(indexsoal) == -1){
            this.benar.push(indexsoal);
          }
          if(this.salah.indexOf(indexsoal) != -1){
            this.salah.splice(this.salah.indexOf(indexsoal),1);
          }
        }else{
          if(this.benar.indexOf(indexsoal) != -1){
            this.benar.splice(this.benar.indexOf(indexsoal),1);
            this.salah.push(indexsoal);
          }else if(this.salah.indexOf(indexsoal) != -1){

          }else{
            this.salah.push(indexsoal);
          }
        }
        this.score = this.benar.length;
    }
  }
}
</script>
