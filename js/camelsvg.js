var CamelSVG = (function () {
    var my = {}, svg = document.getElementById("CamelSVG");
    var items = [];
    
    my.init = function() {
        console.log(svg);
    }
    
    my.draw = function() {
        for(var i = 0; i < items.length; i++) {
            document.getElementById("CamelSVG").appendChild(items[i].svgObject);
            console.log("drawing " + items[i].svgObject);
        }
    }
    
    function plot(obj) {
        
    }
    
    function Endpoint() {
        return {};
    }
    
    my.addEndpoint = function(name) {
        
        var e = new Endpoint();
        var circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        circle.setAttributeNS(null, "id", name);
        //circle.setAttributeNS(null, "cx", "200");
        //circle.setAttributeNS(null, "cy", "50");
        circle.setAttributeNS(null, "r", "10");
        circle.setAttributeNS(null, "stroke", "red");
        circle.setAttributeNS(null, "stroke-width", "1");
        circle.setAttributeNS(null, "fill", "orange");
        
        e.svgObject = circle;
        e.name = name;
        
        items.push(e);
        
        console.log("added new endpoint " + e.name + " to items [size=" + items.length + "]");
        console.log(e);
    }
    
    my.addExchange = function(name, from, to) {
        var e = new Exchange();
        e.type = TYPE_EXCHANGE;
        e.name = name;
        e.from = from;
        e.to = to;
        e.context = ctx;
        
        items.push(e);
        exchangesCtr++;
        console.log("added new exchange [" + name + "] to items [size=" + items.length + "]");
    }
    
    
    return my;
})();