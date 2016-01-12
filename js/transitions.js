var data = []

$.getJSON("relationships.json", function (json) {
    data = json;
    window.alert(data['title'])
});