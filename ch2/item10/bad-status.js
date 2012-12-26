function status(info) {
    var widget = new Widget();
    with (widget) {
        setBackground("blue");
        setForeground("white");
        setText("Status: " + info); // ambiguous reference
        show();
    }
}

status("connecting"); // Status: connecting
Widget.prototype.info = "[[widget info]]";
status("connected"); // Status: [[widget info]]
