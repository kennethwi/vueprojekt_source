<link href="/assets/main.scss" rel="stylesheet" />

<style lang="scss">
  $some-color: #faa;

  nav {
    background-color: $some-color;

    a {
      background-color: #afa;
    }
  }
</style>

<script>
  // ANVÄNDER jQUERY för anropet (jsonp)
  import $ from 'jquery'

  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        a: 'hej',
        hela_artikelns_text: 'Här är plats för artikeltexten',
        artikeltitel: '',
        laenk_arr: [],
        aktuellt_soekord_input: ''
      }
    },
    methods: {
      onClick() {
        //this.soek2("Engelska", "en", "Malmö");
        this.soek(this.aktuellt_soekord_input)
      },

      rensa_text(str) {
        let utdata2 = str.replace(/\\n/g, ' ')
        let utdata3 = utdata2.replace(/\\/g, '')
        let utdata5 = utdata3.replace(/&amp;/g, '')

        return utdata5
      },

      soek2(spraak, lang, titel) {
        console.log(spraak, lang, titel)
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
          titel +
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

          document.querySelector('#artikeln_spraak2').innerHTML =
            this.rensa_text(utarr.join(''))
          document.querySelector('#titel_spraak2').innerHTML =
            '<i>' + titel + '</i> på ' + spraak

          document.querySelector('#artikeltitel').innerHTML = titel
          document.querySelector('#helaartikeltitel').innerHTML =
            'Hela artikeln <i>' + titel + '</i>'

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

        $.getJSON(url, (data) => {
          //$.getJSON(url, function (data) {
          console.log(data)
          let HTML = JSON.stringify(data.parse.text)
          // Parsa sträng som HTML:  https://stackoverflow.com/questions/36631762/returning-html-with-fetch
          var parser = new DOMParser()
          var doc = parser.parseFromString(HTML, 'text/html')

          // första stycket (p-taggen) VISAS UPPE TV.
          let stycke1 = doc.querySelector('p').innerHTML
          document.querySelector('#foersta_stycket').innerHTML =
            this.rensa_text(stycke1)

          // LÄNKAR
          this.laenk_arr = data.parse.links
          //console.log(laenk_arr);

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

          this.artikeltitel = data.parse.title

          //  document.querySelector("#helaartikeltitel").innerHTML =
          //    "Hela artikeln <i>" + ti + "</i>";

          //let url_spraak2 = data.parse.langlinks[0].url;
          let spraak2 = data.parse.langlinks[0].langname
          let lang2 = data.parse.langlinks[0].lang
          let titel_paa_spraak_2 = data.parse.langlinks[0]['*']
          // alert(titel_paa_spraak_2);

          // om den finns på engelska, hämta den och visa den
          if (data.parse.langlinks[0].url) {
            // alert(data.parse.langlinks[0].url);
            this.soek2(spraak2, lang2, titel_paa_spraak_2)
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
  TEST STARTAR HÄR - DENNA ANVÄNDS INTE LÄNGRE!!
  <div class="container py-4" style="border: 1px solid grey">
    <header class="pb-3 mb-4 border-bottom">
      <form class="form-control">
        <span class="fs-4">
          <input
            type="text"
            id="soekord"
            v-model="aktuellt_soekord_input"
            placeholder="Slå upp i Wikipedia"
            style="width: 500px" /><input type="button" onclick="soek()"
        /></span>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
        <input type="button" @click="onClick" value="sök" />
        <input class="btn btn-primary" type="button" value="Klicka här" />
      </form>
    </header>

    <div class="row align-items-md-stretch">
      <div class="col-md-10">
        <div class="container-fluid py-5" style="padding-top: 20px !important">
          <h1 class="display-5 fw-bold" id="artikeltitel">
            {{ artikeltitel }}
          </h1>
          <p class="col-md-12 fs-5" id="foersta_stycket">
            Här visas artikelns första stycke...
          </p>
        </div>
      </div>

      <div class="col-md-2">
        <div class="container-fluid py-5" style="padding-top: 20px !important">
          <p
            class="display-6 fw-bold"
            id="artikeltitel"
            v-if="laenk_arr.length"
          >
            Länkar från <i>{{ artikeltitel }}</i>
          </p>
          <p class="col-md-9 fs-4" id="foersta_stycket" />
          <p
            style="
              max-height: 200px;
              height: 100%;
              overflow: auto;
              font-size: 0.8rem;
            "
          />
          <ul class="list-group">
            <a
              class="list-group-item"
              :key="laenk"
              v-for="laenk in laenk_arr"
              >{{ laenk['*'] }}</a
            >
          </ul>
        </div>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2 id="helaartikeltitel">Hela artikeln...</h2>

          <!-- <p id="hela_artikeln" ></p> -->

          <p id="hela_artikeln" v-html="hela_artikelns_text" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2 id="titel_spraak2">Add borders</h2>
          <p id="artikeln_spraak2">
            Or, keep it light and add a border for some added definition to the
            boundaries of your content. Be sure to look under the hood at the
            source HTML here as we've adjusted the alignment and sizing of both
            column's content for equal-height.
          </p>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-muted border-top" />
  </div>
</template>
