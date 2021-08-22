module.exports = function(RED) {
    function Quittung(config) {
        const lib = new require("./lib/gsi_kebap30.js");
        const instance = new lib();
        RED.nodes.createNode(this,config);
        var node = this;
        let last_prep = node.context().get("lastPreperation");
        node.on('input', function(msg) {
          instance.quittung(config.ip,node.context()).then(function(quittung) {
              msg.payload = {
                url:quittung
              };
              msg.url = quittung;
              node.send(msg);
              if(last_prep !== quittung) {
                node.status({fill:"green",shape:"dot",text:"New"});
                last_prep = quittung;
              } else {
                node.status({fill:"blue",shape:"dot",text:"Cache"});
              }
          });
        });
    }
    RED.nodes.registerType("kebap30-quittung",Quittung);
}
