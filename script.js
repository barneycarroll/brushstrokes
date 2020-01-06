import s from './node_modules/sin/dist/sin.esm.js'

const Stroke = ({outer, inner}) => 
  s`object[type=image/svg+xml][data=./img/stroke.svg]`({
    style: outer,
    onload: e => {
      e.target.getSVGDocument().querySelector('style').textContent = inner
    },
  })

const Underline = x =>
  s`span.Underline
    border-bottom 1px solid
  `(x)

const Ticket = () => 
  s`.Ticket
    padding .7em 1.5em
    font-weight bold
    height 2.333333333333cm
    box-sizing border-box
    border-bottom 1px dashed #864
  `(
    Underline('www.brushstrokes.courses'), s`br`,
    'brushstrokes.courses@gmail.com', s`br`,
    s`span
      font-weight 500
    `('Laura Truesdale '), '07854130817', s`br`,
  )

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
    width 29.7cm
    height 42cm
    
    font-size 1rem
    color #fa1

    background-image    url(./img/Sharpened_laura.jpg) 
    background-size     23cm
    background-position 0 50%

    p {
      margin 1em 0
    }
	`(
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

    s`.Tickets
      padding-top 1px
      box-sizing border-box
      position absolute
      top 0
      right 0
      height 100%
      width 7cm
      background #fa1

      font-size .9rem
      color #444

      border-left 1px solid
    `(
      Array
        .from({length: 100})
        .map(() => 
          Ticket
        ),
    ),

    s`.Content
      position relative
      box-sizing border-box
      width 22.7cm
      padding 3rem
    `(
      s`.Header
        transform-origin 0
        transform scale(1.1666)
      `(
        s`h1.font1
          margin -1rem 0 0
          font-size 3.95rem
        `(
          s`span
            border-bottom .075cm solid
            padding-bottom .7rem
          `(
            White('BRUSHSTROKES'), '.COURSES'
          ),
        ),

        s`h2`(
          White('6-week portraiture course '), 
          'with Qualified Teacher Status accredited artist Laura Truesdale',
        ),
      ),

      s`.Footer
        padding-top 26cm
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
              s`tr`(
                s`td`(''), s`td`('8'), s`td`('th February'), s`td`('Life Drawing'            )
              ),
              s`tr`(
                s`td`('1'), s`td`('5'), s`td`('th February'), s`td`('Sketching'               )
              ),
              s`tr`(
                s`td`('2'), s`td`('2'), s`td`('nd February'), s`td`('Soft Pastels'            )
              ),
              s`tr`(
                s`td`('2'), s`td`('9'), s`td`('th February'), s`td`('Acrylic Paint'           )
              ),
              s`tr`(
                s`td`(''), s`td`('7'), s`td`('th March'   ), s`td[rowspan=2]`('Personal Project' )
              ),
              s`tr`(
                s`td`('1'), s`td`('4'), s`td`('th March'   ),
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
        Underline('www.brushstrokes.courses'), s`br`,
        'brushstrokes.courses@gmail.com', s`br`,
        s`span
          font-weight 500
        `('...or call Laura Truesdale on '), '07854130817', s`br`,
      ),
    ),
	),
)