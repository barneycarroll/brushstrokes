import s from './node_modules/sin/dist/sin.esm.js'

const Stroke = ({outer, inner}) => 
  s`object[type=image/svg+xml][data=./img/stroke.svg]`({
    style  : outer,
    onload : e => {
      e.target.getSVGDocument().querySelector('style').textContent = inner
    },
  })

const White = x => 
  s`span.White
    color white
  `(x)

s.mount(() =>
  s`.App.font4
    line-height 1.5
    display block
    position absolute
    box-sizing border-box
    overflow hidden

		top 0 
    left 0 
    width 23cm
    height 42cm
    
    font-size 1rem
    color #fa1

    background-image    url(./img/sharp_laura_optimized.jpg) 
    background-size     23cm
    background-position 0 50%

    transform-origin    0 0

    p {
      margin 1em 0
    }

    a {
      color inherit
    }
	`({
    life: dom => {
      let tick 

      bang()

      onresize = () => (
        clearTimeout(tick),
        tick = setTimeout(bang, 100)
      )

      function bang(){
        fraction = innerWidth / dom.clientWidth

        dom.style.transform = `scale(${ fraction })`

        document.body.style.maxHeight = dom.clientHeight / fraction + 'px'
      }
    }
  },
    Stroke({
      outer: `
        top: -4.5cm;
        left: -13cm;
        width: 130cm;
        position: absolute;
        transform: rotate(-.5deg);
      `,
      inner: `
        path {
          fill: #a55 !important;
        }
      `
    }),

    Stroke({
      outer: `
        top: -4cm;
        left: -7cm;
        width: 120cm;
        position: absolute;
      `,
      inner: `
        path {
          fill: #364 !important;
        }
      `
    }),

    Stroke({
      outer: `
        top: 23.5cm;
        left: -12cm;
        width: 158cm;
        position: absolute;
        transform: rotate(-5.5deg); 
      `,
      inner: `
        path {
          fill: #a55 !important;
        }
      `
    }),

    Stroke({
      outer: `
        top: 28.5cm;
        left: -7cm;
        width: 120cm;
        position: absolute;
      `,
      inner: `
        path {
          fill: #348 !important;
        }
      `
    }),

    Stroke({
      outer: `
        top: -61.5cm;
        left: -83cm;
        width: 110cm;
        transform: rotate(180deg);
        position: absolute;
      `,
      inner: `
        path {
          fill: #fa1 !important;
        }
      `
    }),

    s`.Content
      position relative
      box-sizing border-box
      padding 3rem

      transform-origin 0 0 
    `(
      s`.Header`(
        s`h1.font1
          margin -1rem 0 0
          font-size 4.6rem
        `(
          s`span
            border-bottom .075cm solid
            padding-bottom .7rem
            whitespace no-wrap
          `(
            White('BRUSHSTROKES'), '.COURSES'
          ),
        ),

        s`h2
            font-size 1.75rem 
        `(
          White('6-week portraiture course '), 
          'with Qualified Teacher Status accredited artist Laura Truesdale',
        ),
      ),

      s`.Footer
        padding-top 24.75cm
        display flex

        .Box {
          flex 1 1 50%
          box-sizing border-box

          :last-child {
            padding-left 1em
          }
        }
      `(
        s`.Box`(
          s`p
            font-weight bold
          `(
            'Learn portraiture using different media, including a life-drawing class & an opportunity to create your own portraiture project with 1-to-1 mentoring.'
          ),

          s`p
            color white
          `(
            'Saturday Mornings, 9:00 AM – 11:30 AM', s`br`,
            'Main Hall at The Dolphin Centre, Whitchurch Road, Pangbourne, RG8 7DA', s`br`,
            s`span
              font-weight bold
            `('£200 - easels & all materials provided'),
          ),
        ),

        s`.Box`(
          s`table
            font-size 1.333rem
            font-weight bold
            margin .9rem 0
            border-collapse collapse
    
            td {
              padding 0
            }
    
            td:nth-child(-n+2) {
              text-align right
            }
    
            td:nth-child(n+4) {
              padding-left .5em
            }

            td:nth-child(4) {
              color white
            }
          `(
            s`tbody`(
              [
                [ s`td`,      s`td`('8'), s`td`('th February'), s`td`           ('Life Drawing'     ) ],

                [ s`td`('1'), s`td`('5'), s`td`('th February'), s`td`           ('Sketching'        ) ],

                [ s`td`('2'), s`td`('2'), s`td`('nd February'), s`td`           ('Soft Pastels'     ) ],

                [ s`td`('2'), s`td`('9'), s`td`('th February'), s`td`           ('Acrylic Paint'    ) ],

                [ s`td`,      s`td`('7'), s`td`('th March'   ), s`td[rowspan=2]`('Personal Project' ) ],

                [ s`td`('1'), s`td`('4'), s`td`('th March'   )                                        ],
              ]
                .map(tr => 
                  s`tr`(tr)
                ),
            ),
          ),
        ),
      ),

      s`p
        color #348
        margin 0 !important
        padding 1rem
        font-weight bold
        font-size 1.3rem
        text-align center 
      `(
        s`a[href=http://www.brushstrokes.courses]`      ('www.brushstrokes.courses'), s`br`,
        s`a[href=mailto:brushstrokes.courses@gmail.com]`('brushstrokes.courses@gmail.com'), s`br`,
        s`span
          font-weight 500
        `('...or call Laura Truesdale on '), s`a[href=tel:07854130817]`('07854130817'), s`br`,
      ),
    ),
	),
)