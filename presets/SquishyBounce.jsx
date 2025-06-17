(function(){
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("Select a composition with layers.");
        return;
    }
    if (comp.selectedLayers.length === 0) {
        alert("Select at least one layer.");
        return;
    }
    app.beginUndoGroup("Apply Squishy Bounce");
    var expr = "amp = effect('Amplitude')(\"Slider\");\n"
        + "freq = effect('Speed')(\"Slider\");\n"
        + "offset = effect('Timing Offset')(\"Slider\");\n"
        + "damp = effect('Damping')(\"Slider\");\n"
        + "t = time - inPoint - offset;\n"
        + "if (t > 0){\n"
        + "  squish = amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(damp * t);\n"
        + "  [value[0]*(1+squish/100), value[1]*(1-squish/100)];\n"
        + "} else value;";

    for (var i = 0; i < comp.selectedLayers.length; i++) {
        var layer = comp.selectedLayers[i];
        var effects = layer.property("Effects");

        var ampCtrl = effects.addProperty("ADBE Slider Control");
        ampCtrl.name = "Amplitude";
        ampCtrl.property("Slider").setValue(50);

        var speedCtrl = effects.addProperty("ADBE Slider Control");
        speedCtrl.name = "Speed";
        speedCtrl.property("Slider").setValue(3);

        var offsetCtrl = effects.addProperty("ADBE Slider Control");
        offsetCtrl.name = "Timing Offset";
        offsetCtrl.property("Slider").setValue(0);

        var dampCtrl = effects.addProperty("ADBE Slider Control");
        dampCtrl.name = "Damping";
        dampCtrl.property("Slider").setValue(5);

        layer.property("Scale").expression = expr;
    }
    app.endUndoGroup();
})();
