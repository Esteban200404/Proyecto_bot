const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowGracias = addKeyword(['0', 'gracias']).addAnswer(['*Gracias por comunicarte conmigo* 👋',
'Recuerda que el Horario es de *7:00.A.M - 12:00.A.M* y de *1:30.P.M - 7:00.P.M*'])

const flowTimon = addKeyword(['9', 'Timon', 'Platos'])
    .addAnswer('En estos momentos cuento con estos Timones y Platos: ')
    .addAnswer([
        '*1.* Timon playero ',
        '   *Precio:* 40.000',
        '*2.* Timon de ruta',
        '   *Precio:* 35.000',
        '*3.* Timon de cross piraña',
        '   *Precio:* 45.000',
        '*4.* Timon de montaña en acero',
        '   *Precio:* 20.000',
        '*5.* Timon obersay de montaña',
        '   *Precio:* 42.000',
        '*6.* Triplato en resina de 48 dientes',
        '   *Precio:* 45.000',
        '*0.* Salir'
        ,],
        null,
        null,
        [flowGracias])

const flowCartuchos = addKeyword(['8', 'Cartuchos', 'cambios'])
    .addAnswer('En estos momentos cuento con estos Piñones, Pachas, Cajas y Extensores: ')
    .addAnswer([
        '*1.* cartucho neco 110',
        '   *Precio:* 40.000',
        '*2.* cartucho neco 118',
        '   *Precio:* 40.000',
        '*3.* cartucho neco 122',
        '   *Precio:* 40.000',
        '*4.* juego de cambios tipo moto',
        '   *Precio:* 45.000',
        '*5.* juego de cambios economico',
        '   *Precio:* 42.000',
        '*6.* gemelas de cambio en resina ',
        '   *Precio:* 18.000',
        '*7.*gemelas de cambio en aluminio',
        '   *Precio:* 25.000',
        '*8.* manzanas en acero',
        '   *Precio:* 30.000',
        '*9.* juego de manzanas en rodamineto sellada asses',
        '   *Precio:* 80.000',
        '*10.* juego de rueas auxiliares 12',
        '   *Precio:* 25.000',
        '*11.* juego de rueas auxiliares 16',
        '   *Precio:* 25.000',
        '*12.* juego de rueas auxiliares 20',
        '   *Precio:* 25.000',
        '*0.* Salir'
        ,],
        null,
        null,
        [flowGracias])


const flowPiñones = addKeyword(['7', 'piñones', 'Pacha', 'caja'])
    .addAnswer('En estos momentos cuento con estos Piñones, Pachas, Cajas y Extensores: ')
    .addAnswer([
        '*1.* piñon economico 20 dientes',
        '   *Precio:* 20.000',
        '*2.* piñon economico 16 dientes',
        '   *Precio:* 18.000',
        '*3.* extensor para pacha',
        '   *Precio:* 20.000',
        '*4.* caja de direccion externa',
        '   *Precio:* 25.000',
        '*5.* caja de direccion interna',
        '   *Precio:* 25.000',
        '*6.* pacha economica 6 velocidades',
        '   *Precio:* 40.000',
        '*7.*pacha economica 7 velocidades',
        '   *Precio:* 45.000',
        '*0.* Salir',
    ],
        null,
        null,
        [flowGracias])

const flowAccesorios = addKeyword(['Accesorios', 'accesorios', '6'])
    .addAnswer('En estos momentos cuento con estos Accesorios: ')
    .addAnswer([
        '*1.* luz panel dos colores',
        '   *Precio:* 28.000',
        '*2.* luz comet tres colores',
        '   *Precio:* 34.000',
        '*3.* luz economica 1 color',
        '   *Precio:* 13.000',
        '*4.* luz economica 3 colores',
        '   *Precio:* 14.000',
        '*5.* luz pito delantera',
        '   *Precio:* 34.000',
        '*6.* linterna zoom escualizable',
        '   *Precio:* 50.000',
        '*7.* mango caucho economico',
        '   *Precio:* 6.000',
        '*8.* mango espuma colores economico',
        '   *Precio:* 6.000',
        '*9.* mango anillos',
        '   *Precio:* 25.000',
        '*10.* mango ergonomico anillos',
        '   *Precio:* 27.000',
        '*11.* mango ergonomico gris 1',
        '   *Precio:* 17.000',
        '*12.* mango siliconado tipo gorilla',
        '   *Precio:* 11.000',
        '*13.* portacaramañola aluminio economica',
        '   *Precio:* 10.000',
        '*14.* portacaramañola plastico economica',
        '   *Precio:* 10.000',
        '*15.* portacaramañola plastico ontrail',
        '   *Precio:* 15.000',
        '*16.* portacaramañola plastico escualizable',
        '   *Precio:* 15.000',
        '*17.* sillin auxiliar',
        '   *Precio:* 18.000',
        '*18.* sillin para niños',
        '   *Precio:* 10.000',
        '*19.* kit de niños',
        '   *Precio:* 70.000',
        '*20.* porta herramientas',
        '   *Precio:* 30.000',
        '*21.* candado gorila',
        '   *Precio:* 30.000',
        '*22.* candado security de llave',
        '   *Precio:* 20.000',
        '*23.* parlantes',
        '   *Precio:* 30.000',
        '*24.* forros para sillin velo',
        '   *Precio:* 6.000',
        '*25.* guarda barros de colores',
        '   *Precio:* 25.000',
        '*26.* guardabarro',
        '   *Precio:* 50.000',
        '*27.* impermedables en plastico',
        '   *Precio:* 12.000',
        '*28.* puntilla de eje trasero',
        '   *Precio:* 7.000',
        '*29.* caja de parches * 48',
        '   *Precio:* 7.500',
        '*0.* Salir'
        ,],
        null,
        null,
        [flowGracias])

const FlowFrenos = addKeyword(['5', 'frenos', 'Manguera', 'manguera'])
    .addAnswer('En estos momentos cuento con estos Frenos y Mangueras: ')
    .addAnswer([
        '*1.* juego de frenos resina',
        '    *Precio:* 40.000',
        '*2.* juego de frenos en aluminio',
        '    *Precio:* 53.000',
        '*3.* Discos de freno 160',
        '    *Precio:* 20.000',
        '*4.* Dapata bristol',
        '    *Precio:* 6.000',
        '*5.* Dapata de cross ',
        '    *Precio:* 6.000',
        '*6.* Dapata de graduacion',
        '    *Precio:* 6.000',
        '*7.* Mangera 20 kenda',
        '    *Precio:* 16.000',
        '*8.* Mangera 12 x1.75',
        '    *Precio:* 16.000',
        '*9.* Mangera 26 x1.9 valvula corta',
        '    *Precio:* 16.000',
        '*10.* Mangera  26 x 1.9 valvula de 48',
        '    *Precio:* 18.000',
        '*11.* Mangera 26 x 1.95 valvula 40',
        '    *Precio:* 16.000',
        '*12.* Mangera 27.5 kenda valvula corta',
        '    *Precio:* 18.000',
        '*13.* Mangera 29 x 1.75',
        '    *Precio:* 20.000',
        '*14.* Mangera 700 25 valvula de 48',
        '    *Precio:* 50.000',
        '*0.* Salir'
        ,],
        null,
        null,
        [flowGracias])

const flowCadenas = addKeyword(['4', 'cadenas', 'tensores', 'descarriladores'])
    .addAnswer('En estos momentos cuento con estas Cadenas, Tensores y Descarriladores: ')
    .addAnswer([
        '*1.* cadenilla KMC 6 vel',
        '    *Precio:* 25.000',
        '*2.* cadenila KMC 8 vel',
        '    *Precio:* 52.000',
        '*3.* cadenilla KMC 9 vel',
        '    *Precio:* 70.000',
        '*4.* cadenilla tec',
        '    *Precio:* 18.000',
        '*5.* cadenilla tec',
        '    *Precio:* 18.000',
        '*6.* cedena tec',
        '    *Precio:* 16.000',
        '*7.* tensor economico',
        '    *Precio:* 25.000',
        '*8.* cedena tec',
        '    *Precio:* 16.000',
        '*9.* descarrilador tourney doble función',
        '    *Precio:* 50.000',
        '*9.* descarrilador economico',
        '    *Precio:* 16.000',
        '*0.* Salir.',
    ],
        null,
        null,
        [flowGracias])

const flowGW = addKeyword(['GW', 'gw', 'Gw', '1'])
    .addAnswer('En estos momentos cuento con estos Repuestos GW:')
    .addAnswer([
        '*1.* Piñon gw 16 dientes',
        '    *Precio:* 25.000',
        '*2.* Piñon gw 18 dientes',
        '    *Precio:* 20.000',
        '*3.* Cartucho gw 110',
        '    *Precio:* 35.000',
        '*4.* Cartucho gw 113.5',
        '    *Precio:* 35.000',
        '*5.* Cartucho gw 118',
        '    *Precio:* 35.000',
        '*6.* Cartucho gw 122.5',
        '    *Precio:* 35.000',
        '*7.* Manzanas gw rodamiento sellado',
        '    *Precio:* 60.000',
        '*8.* Sillin gw resortado',
        '    *Precio:* 40.000',
        '*9.* Sillin gw confort plus resortado',
        '    *Precio:* 40.000',
        '*10.*Sillin gw new confort',
        '    *Precio:* 30.000',
        '*11.*Zapatas gw',
        '    *Precio:* 16.000',
        '*0.* Salir',],

        null,
        null,
        [flowGracias])

const flowShimano = addKeyword(['Shimano', '2', 'shimano'])
    .addAnswer('En estos momentos cuento con estos repuestos Shimano:')
    .addAnswer([
        '*1.* tensor shimano sis',
        '    *Precio:* 40.000',
        '*2.* tensor shimano economico',
        '    *Precio:* 35.000',
        '*3.* pacha shimano 6 velocidades',
        '    *Precio:* 60.000',
        '*4.* pacha shimano 7 velocidades',
        '    *Precio:* 65.000',
        '*5.* pacha shimano 7 velocidades con protector',
        '    *Precio:* 70.000',
        '*6.* pacha shimano 7 velocidades mega range',
        '    *Precio:* 75.000',
        '*7.* tensor shimano tourney 7 velocidades',
        '    *Precio:* 65.000',
        '*8.* palancas para marco 7 velocidades shimano',
        '    *Precio:* 60.000',
        '*9.* cartucho shimano 110',
        '    *Precio:* 65.000',
        '*10.* cartucho shimano 118',
        '    *Precio:* 65.000',
        '*11.* cartucho shimano 122',
        '    *Precio:* 65.000',
        '*12.* manzanas shimano 10 velocidades',
        '    *Precio:* 102.000',
        '*13.* zapata de ruta shaimano',
        '    *Precio:* 6.000',
        '*14.* zapata de barilla ahaimano',
        '    *Precio:* 6.000',
        '*0.* Salir',],
        null,
        null,
        [flowGracias])

const flowPedales = addKeyword(['Pedales', '3', 'pedales'])
    .addAnswer(['En estos momentos cuento con estos Pedales:',
        '*1.* pedal en aluminio economico',
        '    *Precio:* 32.000',
        '*2.* pedal aluminio cross',
        '    *Precio:* 32.000',
        '*3.* pedal resina economico ',
        '    *Precio:* 15.000',
        '*4.* pedal infantil ',
        '    *Precio:* 15.000',
        '*0.* Salir',],
        null,
        null,
        [flowGracias])

const flowRepuestos = addKeyword(['2', 'dos']).addAnswer('A continuacion decide que tipo de marca deseas manejar')
    .addAnswer([
        '*1.* 🚲 GW',
        '*2.* 🚲 Shimano',
        '*3.* 🚲 Pedales',
        '*4.* 🚲 Cadenas y Tensores/Descarriladores',
        '*5.* 🚲 Frenos y  Mangueras',
        '*6.* 🚲 Accesorios',
        '*7.* 🚲 Piñones, Extensores, Cajas, Pachas',
        '*8.* 🚲 Cartuchos, Cambios, Manzanas, Ruedas',
        '*0.* Salir',
    ],
        null,
        null,
        [flowGW, flowShimano, flowPedales, flowCadenas, FlowFrenos,
            flowAccesorios, flowPiñones, flowCartuchos, flowTimon, flowGracias])

const flowServivios = addKeyword(['3', 'tres', 'Tres', 'servicios'])
    .addAnswer([
        '🚲Lavado ',
        '*Precio:* $10.000',
        '🚲Alistamiento General ',
        '*Precio:* $30.000',
        '🚲Centrada de Rin ',
        '*Precio:* $10.000',
        '🚲Enradiada ',
        '*Precio:* $25.000',
        '🚲Purga Trasera ',
        '*Precio:* $25.000',
        '🚲Purga Delantera ',
        '*Precio:* $15.000',
        '🚲Sincronizacion cambios y frenos ',
        '*Precio:* Varia',
        '*0.* Salir.',],
        null,
        null,
        [flowGracias])

const flowMantenimiento = addKeyword(['1', 'uno',])
    .addAnswer([
        '🚲 El mantenimiento Stanadard: *$60.000*',
        '🚲 El mantenimiento Plus: *$80.000*',
        '🚲 El mantenimiento Full: *$150.000*',
        '🚲 El mantenimiento Nucleo (Pacha): *$30.000*',
        '🚲 El mantenimiento Suspencion de Aceite: *$35.000*',
        '🚲 El mantenimiento Shifter: *$20.000*',
        '🚲 El mantenimiento Ergopower: *Desde $70.00*',
        '*0.* Salir',
    ],
        null,
        null,
        [flowGracias]
    )

const flowPrincipal = addKeyword(['Hola', "Buenas"])
    .addAnswer(['🚲 *Bicicleteria de Jhon* 🚲',
        'Que tipo de servicio deseas conocer: ',
        '🚲 *1.* Mantenimiento',
        '🚲 *2.* Repuestos',
        '🚲 *3.* Servicios',
        '🚲 *0.* Salir'],
        null,
        null,
        [flowMantenimiento, flowRepuestos, flowServivios, flowGracias]
    )



const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
