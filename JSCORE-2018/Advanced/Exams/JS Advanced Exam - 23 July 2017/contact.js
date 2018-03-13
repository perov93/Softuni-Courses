class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
        this.offline = false

    }

    get offline(){
        return this._offline
    }
    set offline(value) {
        if(value){
            this.element.find('.title').addClass('offline')
        } else {
            this.element.find('.title').removeClass('offline')
        }
        this._offline = value;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if(value){
            this.element.find('.title').addClass('online')
        } else {
            this.element.find('.title').removeClass('online')
        }
        this._online = value;
    }

    render(id) {
        let container = $('#' + id);
        container.append(this.element);
    }

    createElement() {
        let articleDiv = $('<article>'); // Create a article tag
        let titleDiv = $(`<div class="title">${this.firstName} ${this.lastName}</div>`) // Create <div> with ${} info

        let infoDiv = $('<div class="info" style="display: none;">\n' +
            `<span>&phone; ${this.phone}</span>\n` +
            `<span>&#9993; ${this.email}</span>\n` +
            '</div>\n');

        let infoBtn = $('<button>&#8505;</button>') // Create button tag
            .click(() => infoDiv.toggle()); // Attach even listener click to button tag

        articleDiv
            .append(titleDiv.append(infoBtn))
            .append(infoDiv)

        return articleDiv;
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));
// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[0].offline = true, 4000);

/**
 * Created by dzgn on 3/13/2018.
 */
 
 