function processor(argCommands) {
    let inheritor = (function () {
        let objects = new Map()

        function create(name, param, parent) {
            if(param) inherit(name, parent)
            else objects.set(name, {})
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)))
        }

        function set(objName, propName, value) {
            objects.get(objName)[propName] = value
        }

        function print(name) {
            let current = objects.get(name)
            let props = []
            for (let prop in current) {
                props.push(`${prop}:${current[prop]}`)
            }
            console.log(props.join(', '))
            // let props = Object.keys(current)
            // console.log(props.map(k => `${k}:${current[k]}`).join(', '))

        }
        return {
            create,
            inherit,
            set,
            print
        }
    })();
    for (let cmd of argCommands) {
        let [command, name, param, value]= cmd.split(' ')
    inheritor[command](name, param, value)
    }
}

processor([
    'create c1',
    'create c2 inherit c1',
    'set c1 model red',
    'set c2 color new',
    'print c1',
    'print c2'])