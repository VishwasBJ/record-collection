// this is a collection of my artist and few ids to recognise them
var collection={
    "2548":{
        album:"slippery",
        artist:"bonney",
        tracks:[
            "let it rock"
        ]
    },
    "2468":{
        album:"1999",
        artist:"prince",
        tracks:[
            "1999",
            "liittle rose"
        ]
    },
    "1245":{
        artist:"robert",
        tracks:[]
    },
    "3458":{
        album:"empty",
       
    }
}
var collectionCopy=JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value) {
    if(value===""){
        delete collection[id][prop];
    }
    else if(prop==="tracks"){
        collection[id][prop]=collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection
}


console.log(updateRecords(2468,"artist","prince"));

