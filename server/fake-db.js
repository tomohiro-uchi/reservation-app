const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'Sample text 1 XL',
                heading2: 'Sample text 2 XL',
                heading3: 'Sample text 3 XL',
                headingtext1: 'Test Text1 XL',
                headingtext2: 'Test Text2 XL',
                headingtext3: 'Test Text3 XL',
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'Sample text 1 Mini',
                heading2: 'Sample text 2 Mini',
                heading3: 'Sample text 3 Mini',
                headingtext1: 'Test Text1 Mini',
                headingtext2: 'Test Text2 Mini',
                headingtext3: 'Test Text3 Mini',
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'a standard phone',
                heading1: 'Sample text 1 Standard',
                heading2: 'Sample text 2 Standard',
                heading3: 'Sample text 3 Standard',
                headingtext1: 'Test Text1 Standard',
                headingtext2: 'Test Text2 Standard',
                headingtext3: 'Test Text3 Standard',
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 1000,
                description: 'a apecial phone',
                heading1: 'Sample text 1 Special',
                heading2: 'Sample text 2 Special',
                heading3: 'Sample text 3 Special',
                headingtext1: 'Test Text1 Special',
                headingtext2: 'Test Text2 Special',
                headingtext3: 'Test Text3 Special',
              }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductToDb()
    }
    
    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductToDb()
    }

}

module.exports = FakeDb