const Database = require('./db');
const saveOrphanage  = require('./saveOrphanage');

Database.then(async db => {
    
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng:  "-49.6555874",
        name: "Lar dos meninos", 
        about: " Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "12345689",
        images: [
            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    })

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar orfanato por id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dados da tabela
})