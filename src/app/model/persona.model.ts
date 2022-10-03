// export class persona {
//     id?: number;
//     nombre:string;
//     apellido:string;
//     img:string;

//     constructor(nombre:string, apellido:string, img:string) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.img = img;

//     }

// } 

export class persona {
    
    id?: number;
    name: String;
    lastName: String;
    text: String;
    description: String;
    imgPerfil: String;
    imgBanner: String;
    country: String;
    estate: String;
    contact: String;
    phone: String;

    constructor (name: String, lastName: String, text: String, description: String, imgPerfil: String, imgBanner: String,
                country: String, estate: String, contact: String, phone: String) {

        this.name = name;
        this.lastName = lastName;
        this.text = text;
        this.description = description;
        this.imgPerfil = imgPerfil;
        this.imgBanner = imgBanner;
        this.country = country;
        this.estate = estate;
        this.contact = contact;
        this.phone = phone;
    }
}