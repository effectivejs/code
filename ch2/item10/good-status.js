function status(info) {
    var w = new Widget();
    w.setBackground("blue");
    w.setForeground("white");
    w.setText("Status: " + info);
    w.show();
}

status("connecting"); // Status: connecting
Widget.prototype.info = "[[widget info]]";
status("connected"); // Status: connected
