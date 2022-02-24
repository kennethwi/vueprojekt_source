/* eslint-disable vue/html-closing-bracket-newline */
<link href="/assets/main.scss" rel="stylesheet" />

<style>
  #artikeltitel_aaa {
    padding-left: 22px;
    padding-bottom: 8px;
    border: rgb(33, 33, 33) solid 1px;
  }

  #nederdel {
    margin-top: 32px;
  }
  .dummy {
    bottom: 32px;
    height: 480px;
    overflow: auto;
    padding: 40px;
  }

  .meddelande {
    padding-left: 22px;
    font-weight: normal;
  }

  #laenk_container {
    background-color: beige;
    padding-left: 22px;
    padding-bottom: 10px;
    padding: auto;
    padding-top: 32;
    margin-top: 20px;
    border: #222222 solid 1px;
    text-align: center;
    vertical-align: middle;
  }
</style>

<style lang="scss">
  $some-color: #dddddd;

  nav {
    background-color: $some-color;
    padding-top: 12px;
    a {
      font-size: 1em;
      background-color: white;
      //border: 1px solid black;
      border-bottom: none;
      margin: 12px;
      padding: 12px;
      text-decoration: none;
      color: black;
    }
  }
</style>

<script>
  // ANVÄNDER jQUERY för anropet (jsonp)
  import $ from 'jquery'

  export default {
    props: {
      msg: { type: String, default: '' }
    },
    data() {
      return {
        a: 'hej',
        foersta_stycket: '',
        hela_artikelns_text: 'Här är plats för artikeltexten',
        artikeln_spraak2: '',
        artikeltitel1: '',
        artikeltitel2: '',
        laenk_arr: [],
        aktuellt_soekord_input: '',
        titel_spraak2: '',
        titel_paa_spraak2: ''
      }
    },

    computed: {
      n_soek_efter() {
        //console.log(this.aktuellt_soekord_input.length;);
        return 'Sök efter: ' + this.aktuellt_soekord_input
      }
    },
    watch: {
      aktuellt_soekord_input(newS) {
        console.log(newS)
        //let tempS = oldS;
      }
    },

    methods: {
      onClick() {
        //this.soek2("Engelska", "en", "Malmö");
        console.log(this.aktuellt_soekord_input)
        this.soek(this.aktuellt_soekord_input)

        //nollställer mha custom event
        //this.$emit(nollstaell())
      },

      rensa_text(str) {
        let utdata2 = str.replace(/\\n/g, ' ')
        let utdata3 = utdata2.replace(/\\/g, '')
        let utdata5 = utdata3.replace(/&amp;/g, '')

        return utdata5
      },

      soek2(spraak, lang, titel2) {
        console.log(spraak, lang, titel2)
        /*
      "https://sv.wikipedia.org/w/api.php?action=parse&page=" +
      str +
      "&format=json&callback=?";
    */

        // STRÄNG PÅ SPRÅK 2 (t ex engelska)
        let url =
          'https://' +
          lang +
          '.wikipedia.org/w/api.php?action=parse&page=' +
          titel2 +
          '&format=json&callback=?'

        $.getJSON(url, (data) => {
          console.log(data)

          let HTML = JSON.stringify(data.parse.text)

          // Parsa sträng som HTML:  https://stackoverflow.com/questions/36631762/returning-html-with-fetch
          var parser = new DOMParser()
          var doc = parser.parseFromString(HTML, 'text/html')

          // undvik bilder, faktarutor (div) mm - tas ej med
          let textarr = doc.querySelectorAll('p, h1, h2, h3, h4, h5')
          let utarr = []
          for (var i = 0; i < textarr.length; i++) {
            utarr.push(textarr[i].innerText)
          }

          this.artikeln_spraak2 = this.rensa_text(utarr.join(''))

          this.titel_spraak2 = '<i>' + titel2 + '</i> på ' + spraak
          //document.querySelector("#titel_spraak2").innerHTML =
          //  "<i>" + titel + "</i> på " + spraak;

          //document.querySelector("#artikeltitel1").innerHTML = titel2;

          this.artikeltitel2 = titel2

          //this.helaartikeltitel1 = "Hela artikeln <i>" + titel1 + "</i>";
          //      document.querySelector("#helaartikeltitel1").innerHTML =
          //       "Hela artikeln <i>" + titel + "</i>";

          console.log(data.parse.langlinks[0])
          console.log(data.parse.langlinks[0].langname)
          console.log(data.parse.langlinks[0].url)

          // // om den finns på engelska, hämta den och visa den
          // if (data.parse.langlinks[0].url)
          // {
          //   soek2(url);
          // }

          //    document.getElementById("outp").innerHTML =      HTML + "<hr>" + rmalltags(HTML);
        })
      },

      soekTEMP() {
        // BRA FUNKAR
        var url =
          'https://sv.wikipedia.org/w/api.php?action=parse&page=' +
          'rugby' +
          '&format=json&callback=?'

        $.getJSON(url, (result) => {
          console.log(result)
        })
      },

      soek(str) {
        // BRA FUNKAR

        //alert(str);
        var url =
          'https://sv.wikipedia.org/w/api.php?action=parse&page=' +
          str +
          '&format=json&callback=?'

        // RÄTT

        //$store.commit("increment", 3);

        //laenklistan

        $.getJSON(url, (data) => {
          //$.getJSON(url, function (data) {
          console.log(data)
          let HTML = JSON.stringify(data.parse.text)
          // Parsa sträng som HTML:  https://stackoverflow.com/questions/36631762/returning-html-with-fetch
          var parser = new DOMParser()
          var doc = parser.parseFromString(HTML, 'text/html')

          // första stycket (p-taggen) VISAS UPPE TV.
          let stycke1 = doc.querySelector('p').innerHTML

          //document.querySelector("#foersta_stycket").innerHTML = this.rensa_text(stycke1);
          this.foersta_stycket = this.rensa_text(stycke1)

          // LÄNKAR
          this.laenk_arr = data.parse.links
          //console.log(laenk_arr);

          //v-for="laenk in laenk_arr">{{ laenk["*"]

          let utarr2 = []
          for (let i = 0; i < this.laenk_arr.length; i++) {
            utarr2.push(this.laenk_arr[i]['*'])
            console.log()
            console.log(this.laenk_arr[i]['*'])
          }
          this.$store.commit('samla_laenklista', utarr2.join(', '))

          // undvik bilder, faktarutor (div) mm - tas ej med
          let textarr = doc.querySelectorAll('p, h1, h2, h3, h4, h5')
          let utarr = []
          for (var i = 0; i < textarr.length; i++) {
            utarr.push(textarr[i].innerHTML)
          }

          let utdata = this.rensa_text('<p>' + utarr.join('</p ><p>') + '</p>')

          //document.querySelector("#hela_artikeln").innerHTML = utdata; //5;
          this.hela_artikelns_text = utdata //"<p>" + utarr.join("</p ><p>") + "</p>";

          // Titel

          this.artikeltitel1 = data.parse.title

          //  document.querySelector("#helaartikeltitel").innerHTML =
          //    "Hela artikeln <i>" + ti + "</i>";

          //let url_spraak2 = data.parse.langlinks[0].url
          let spraak2 = data.parse.langlinks[0].langname
          let lang2 = data.parse.langlinks[0].lang
          this.artikeltitel2 = data.parse.langlinks[0]['*']
          // alert(titel_paa_spraak_2);

          // om den finns på NÅGOT ANNAT SPRÅK, hämta den och visa den
          if (data.parse.langlinks[0].url) {
            // alert(data.parse.langlinks[0].url);
            this.soek2(spraak2, lang2, data.parse.langlinks[0]['*'])
          }

          //    document.getElementById("outp").innerHTML =      HTML + "<hr>" + rmalltags(HTML);
        })
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<style lang="scss">
  $some-color: #fff;

  div {
    background-color: $some-color;

    h1 {
      background-color: #ddd;
    }
  }
</style>

<template>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <form class="form-control">
        <span class="fs-4">
          <input
            type="text"
            id="soekord"
            v-model="aktuellt_soekord_input"
            placeholder="Slå upp i Wikipedia"
            style="width: 500px; margin-right: 10px"
          />
          <input type="button" @click="onClick" value="Sök" />

          <span class="meddelande"> {{ n_soek_efter }} </span>
        </span>
      </form>
    </header>

    <div
      class="row align-items-md-stretch"
      style="
        margin-left: none !important;
        margin-left: none;
        padding-left: none !important;
      "
    >
      <div
        class="col-md-8"
        style="margin-left: none !important; padding-left: none"
      >
        <div
          v-if="laenk_arr.length"
          style="padding-top: 20px !important; margin-left: none !important"
        >
          <h1 class="display-5 fw-bold" id="artikeltitel_aaa">
            {{ artikeltitel1 }}
          </h1>
          <p
            class="col-md-12 fs-5"
            v-html="foersta_stycket"
            style="margin-top: 20px"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div
          v-if="laenk_arr.length"
          id="laenk_container"
          style="
            margin-left: none !important;
            height: 68px !important;
            padding-top: 10px !important;
          "
        >
          <p>
            <RouterLink :to="'/laenkar/' + artikeltitel1">
              Se alla länkar från <i>{{ artikeltitel1 }}</i>
            </RouterLink>
          </p>
          <!-- <p class="col-md-9 fs-4" id="foersta_stycket2">

<p style="max-height: 200px;height:100%; overflow: auto; font-size:0.8rem">
<ul class="list-group">
<a  class="list-group-item" v-for="laenk in laenk_arr">{{ laenk["*"] }}</a>
</ul>

</p>
          </p> -->
        </div>
      </div>
    </div>

    <div
      class="row align-items-md-stretch"
      v-if="laenk_arr.length"
      id="nederdel"
    >
      <div class="col-md-6" v-if="laenk_arr.length">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2 id="helaartikeltitel">
            Hela artikeln <i>{{ artikeltitel1 }}</i>
          </h2>
          <hr />
          <!-- <p id="hela_artikeln" ></p> -->

          <p id="hela_artikeln" v-html="hela_artikelns_text" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2 v-html="titel_spraak2" />
          <hr />
          <p v-html="artikeln_spraak2" />
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-muted border-top" />
  </div>
</template>
