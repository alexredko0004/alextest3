export let positiveTestDataDiesel = [
    {
        price:'10000',
        capacity:'1600',
        result: '13344 €'

    },
    {
        price:'3000',
        capacity:'1000',
        result: '4050 €'
    },
    {
        price:'25000',
        capacity:'2200',
        result: '33198 €'
    }
]

export let negativeTestDataDiesel = [
    {
        price:'',
        capacity:'',
        result: 'Вкажіть вартість авто'

    },
    {
        price:'99',
        capacity:'',
        result: 'Ціна повинна бути не менше 100'
    },
    {
        price:'3500.5',
        capacity:'1200',
        result: 'Ціна має бути вказана в цифрах'
    },
    {
        price:'4500',
        capacity:'',
        result: 'Вкажіть об’єм двигуна в см3'
    },
    {
        price:'0',
        capacity:'2222',
        result: 'Ціна повинна бути не менше 100'
    },
    {
        price:'100',
        capacity:'0',
        result: 'Вкажіть об’єм двигуна в см3'
    }
]

export let negativeTestDataElectro = [
    {
        price:'',
        capacity:'',
        result: 'Вкажіть вартість авто'

    },
    {
        price:'99',
        capacity:'',
        result: 'Ціна повинна бути не менше 100'
    },
    {
        price:'3500.5',
        capacity:'1200',
        result: 'Ціна має бути вказана в цифрах'
    },
    {
        price:'4500',
        capacity:'',
        result: 'Вкажіть ємність АКБ в кВт*год'
    },
    {
        price:'0',
        capacity:'2222',
        result: 'Ціна повинна бути не менше 100'
    },
    {
        price:'100',
        capacity:'0',
        result: 'Вкажіть ємність АКБ в кВт*год'
    }
]

