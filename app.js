const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowGracias = addKeyword(['0', 'gracias']).addAnswer('*Gracias por comunicarte conmigo* 👋')

const flowGW = addKeyword(['GW','gw','Gw','1']).addAnswer('En estos momentos cuento con estos accesorios o productos').addAnswer([
'*1.* Plato de 48 dientes',
'    *Precio:* 120.000',
'*2.* Pastillas',
'    *Precio:* 70.000',
'*0.* Salir',],

null,
null,
[flowGracias])

const flowShimano = addKeyword(['Shimano','2','shimano']).addAnswer(['En estos momentos cuento con estos accesorios o productos',
'*1.* Plato de 28 dientes',
'    *Precio:* 90.000',
'*2.* Pastillas',
'    *Precio:* 65.000',
'*0.* Salir',],
null,
null,
[flowGracias])

const flowBanshee = addKeyword(['Banshee','3','banshee']).addAnswer(['En estos momentos cuento con estos accesorios o productos',
'*1.* Plato de 30 dientes',
'    *Precio:* 160.000',
'*2.* Pastillas',
'    *Precio:* 75.000',
'*0.* Salir',],
null,
null,
[flowGracias])

const flowRepuestos = addKeyword(['2','dos']).addAnswer('A continuacion decide que tipo de marca deseas manejar')
.addAnswer([
    '*1.* 🚲 GW',
    '*2.* 🚲 Shimano',
    '*3.* 🚲 Banshee',    
],
null,
null,
[flowGW,flowShimano,flowBanshee])

const flowServivios = addKeyword(['3','tres','Tres','servicios'])
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
])

const flowMantenimiento = addKeyword(['1','uno'])
.addAnswer([
'🚲 El mantenimiento General: *$60.000*',
'🚲 El mantenimiento Premium: *$80.000*',
'🚲 El mantenimiento Premium full: *$150.000*',
'🚲 El mantenimiento Body: *$30.000*',
'🚲 El mantenimiento Basculante: *$80.000*',
'🚲 El mantenimiento Suspencion Aceite: *$35.000*',
'🚲 El mantenimiento Suspencion de Aire: *Desde $85.000*',
'🚲 El mantenimiento Shifter: *$20.000*',
'🚲 El mantenimiento ergopower: *Varia*',
'*0.* Salir',],
null,
null,
[flowGracias]
)

const flowPrincipal = addKeyword(['Hola',"Buenas"]) 
.addAnswer(['🚲 *Bicicleteria de Jhon* 🚲',
'Que tipo de servicio deseas conocer: ',
'🚲 *1.* Mantenimiento',
'🚲 *2.* Repuestos',
'🚲 *3.* Servicios',
'🚲 *0.* Salir'],
null,
null,
[flowMantenimiento,flowRepuestos,flowServivios,flowGracias]
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
