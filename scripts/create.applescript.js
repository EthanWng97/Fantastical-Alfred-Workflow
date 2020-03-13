function run(args) {
    if (!args || !args[0]) {
        return;
    }
    var query = args[0];
    var iftask = query.split(" ")[0];
    var list = query.split(" ")[1];
    if (list.indexOf("/") != -1) // specify the event and task list
    {
        text = query.substr(iftask.length + list.length + 1);
        console.log(text)
    }
    else{ 
        text = query.substr(iftask.length + 1);
        list = ""
    }
    if (!text) {
        return;
    }
    iftask == 'task' ? ret = iftask + " " + text + " " + list : ret = list + " " + text;
    console.log(ret)
    var app = Application("Fantastical");
    var r = new app.Application();
    app.parseSentence(ret)
    return query;
}
