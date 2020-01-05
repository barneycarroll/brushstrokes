import s from './node_modules/sin/dist/sin.esm.js'

const Stroke = ({outer, inner}) => 
  s`object[type=image/svg+xml][data=./img/stroke.svg]`({
    style: outer,
    onload: e => {
      e.target.getSVGDocument().querySelector('style').textContent = inner
    },
  })

const Ticket = () => 
  s`.Ticket
    padding .7em 1.5em
    height 2.333333333333cm
    box-sizing border-box
    border-bottom 1px dashed #864
  `(
    [
      'Laura Truesdale 07854130817',
      'brushstrokes.courses@gmail.com',
      'http://www.brushstrokes.courses',
    ]
      .map(it => [it, s`br`])
  )

s.mount(() =>
  s`.App.font8
    line-height 1.5
    display block
    position absolute
    box-sizing border-box
    overflow hidden

		top 0 
    left 0 
    width 29.7cm
    height 42cm
    
    font-size 1.7rem
    color #fa1

    background-image    url(./img/laura_portrait.jpg) 
    background-size     22.7cm
    background-position 0 50%
	`(
    s`img[src=./img/stroke.svg]
      position absolute
      
      width 100cm
      top   -79em
      left  -65em
    `,

    Stroke({
      outer: `
        top: 0;
        left: 0;
        position: absolute;
      `,
      inner: `
        path {
          fill: #348 !important;
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
      background #fed

      font-size .9rem
      color #444
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
      s`h1`(
        s`span`(
          'BRUSHSTROKES.COURSES'
        ),
      ),

      s`h2`(
        '6-Week Portraiture Course with Laura Truesdale, Artist & accredited Qualified Teacher Status.'
      ),

      s`p`(
        'Learn how to create a portrait using different media, including a life-drawing class & an opportunity to create your own portraiture project with 1-to-1 mentoring.'
      ),

      s`table`(
        s`tbody`(
          s`tr`(
            s`td`('08th February'), s`td`('Life Drawing'            )
          ),
          s`tr`(
            s`td`('15th February'), s`td`('Sketching'               )
          ),
          s`tr`(
            s`td`('22nd February'), s`td`('Soft Pastels'            )
          ),
          s`tr`(
            s`td`('29th February'), s`td`('Acrylic Paint'           )
          ),
          s`tr`(
            s`td`('07th March'   ), s`td[rowspan=2]`('Personal Project' )
          ),
          s`tr`(
            s`td`('14th March'   ),
          ),
        ),
      ),

      s`p`(
        'Saturday Mornings, 9:00 AM – 11:30 AM', s`br`,
        'Main Hall at The Dolphin Centre, Whitchurch Road, Pangbourne, RG8 7DA'
      ),
  ),
	),
)