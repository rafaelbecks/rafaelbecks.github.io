var exceptions = [
    "artwork",
    "design",
    "engineer",
    "illustration",
    "photography",
    "mixed",
    "master",
    "producer"
]

isException = function(rol)
{
    found = false;
    for(key in exceptions)
    {
        if((rol.toLowerCase()).indexOf(exceptions[key])>=0)        
            found = true;
    }
    return found;
}