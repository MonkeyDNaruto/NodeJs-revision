const eventEmitter =  require("events");

const customEvent = new eventEmitter();

customEvent.on('respond', (name, id) => {
    console.log(`data recived user ${name} and id: ${id}`);
});

customEvent.on('respond', () => {
    console.log(`some other logic here`);
});

customEvent.emit("respond", "Hari", 20);