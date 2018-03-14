function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key]
                    console.log(typeof element)
                    if (typeof element === 'function') {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    }
    return obj
}

let myObj = getExtensibleObject();
let template = {
    extensionMethod: function () {
        console.log('Perov')
    },
    extensionProp: 'Marieta'
}
myObj.extend(template)
console.log(myObj)
console.log(myObj.__proto__)
