obj.temporary = f; // what if obj.temporary already existed?
var result = obj.temporary(arg1, arg2, arg3);
delete obj.temporary; // what if obj.temporary already existed?
